using System.Threading.Tasks;
using System.Collections.Generic; 
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PaymentAPI.Models;
using PaymentAPI.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

using PaymentAPI.Models.DTOs.Responses;


namespace PaymentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class PaymentsController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public PaymentsController(ApiDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetItems()
        {
            var items = await _context.Payments.ToListAsync();
            return Ok(items);
        }
        
        [HttpPost]
        public async Task<IActionResult> CreateItem(Payment data)
        {
            if(ModelState.IsValid)
            {
                await _context.Payments.AddAsync(data);
                await _context.SaveChangesAsync();

                //return CreatedAtAction("GetItem", new {id = data.paymentDetailId}, data);
                return Ok(new MessageResponse(){
                        Success = true,
                        Messages = new List<string>(){
                            "Data Created Sucessfully"
                        }
                });
            }
            return new JsonResult("Something went wrong") {StatusCode = 500};
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetItem(int id)
        {
            var item = await _context.Payments.FirstOrDefaultAsync(x => x.paymentDetailId == id);
            if(item == null)
                return NotFound();
            return Ok(item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateItem(int id, Payment item)
        {
            if(id != item.paymentDetailId)
                return BadRequest();

            var existItem = await _context.Payments.FirstOrDefaultAsync(x => x.paymentDetailId == id);
            if(existItem == null)
                return NotFound();
            
            existItem.cardOwnerName = item.cardOwnerName;
            existItem.cardNumber = item.cardNumber;
            existItem.expirationDate = item.expirationDate;
            existItem.securityCode = item.securityCode;

            //Implement the changes on the database level
            await _context.SaveChangesAsync();

            //return NoContent();
            return Ok(new MessageResponse(){
                        Success = true,
                        Messages = new List<string>(){
                            "Data Updated Sucessfully"
                        }
            });
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var existItem = await _context.Payments.FirstOrDefaultAsync(x=> x.paymentDetailId == id);

            if(existItem == null)
                return NotFound();

            _context.Payments.Remove(existItem);
            await _context.SaveChangesAsync();

            //return Ok(existItem);
            return Ok(new MessageResponse(){
                        Success = true,
                        Messages = new List<string>(){
                            "Data Deleted Sucessfully"
                        }
            });
        }
    }
}