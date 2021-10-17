using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using MoviesApi.Models;
namespace MoviesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public MoviesController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                select Id,Name,Genre,Duration,DATE_FORMAT(ReleaseDate,'%Y-%m-%d') as ReleaseDate from movies;
            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            MySqlDataReader myReader;
            using(MySqlConnection conn = new MySqlConnection(sqlDataSource))
            {
                conn.Open();
                using(MySqlCommand myCommand = new MySqlCommand(query,conn))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    conn.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            string query = @"
                select Id,Name,Genre,Duration,DATE_FORMAT(ReleaseDate,'%Y-%m-%d') as ReleaseDate from movies where Id = @MovieId;
            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            MySqlDataReader myReader;
            using (MySqlConnection conn = new MySqlConnection(sqlDataSource))
            {
                conn.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, conn))
                {
                    myCommand.Parameters.AddWithValue("@MovieId", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    conn.Close();
                }
            }
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult Post(Movie movie)
        {
            string query = @"
                insert into movies
                (Name,Genre,Duration,ReleaseDate)
                   values (@MovieName, @MovieGenre, @MovieDuration, @MovieReleaseDate);
            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            MySqlDataReader myReader;
            using (MySqlConnection conn = new MySqlConnection(sqlDataSource))
            {
                conn.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, conn))
                {
                    myCommand.Parameters.AddWithValue("@MovieName", movie.Name);
                    myCommand.Parameters.AddWithValue("@MovieGenre", movie.Genre);
                    myCommand.Parameters.AddWithValue("@MovieDuration", movie.Duration);
                    myCommand.Parameters.AddWithValue("@MovieReleaseDate", movie.ReleaseDate);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    conn.Close();
                }
            }
            return new JsonResult("Added Sucessfully");
        }

        [HttpPut]
        public JsonResult Put(Movie movie)
        {
            string query = @"
                update movies set
                Name = @MovieName,
                Genre = @MovieGenre,
                Duration = @MovieDuration,
                ReleaseDate = @MovieReleaseDate
                where Id = @MovieId;
            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            MySqlDataReader myReader;
            using (MySqlConnection conn = new MySqlConnection(sqlDataSource))
            {
                conn.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, conn))
                {
                    myCommand.Parameters.AddWithValue("@MovieId", movie.Id);
                    myCommand.Parameters.AddWithValue("@MovieName", movie.Name);
                    myCommand.Parameters.AddWithValue("@MovieGenre", movie.Genre);
                    myCommand.Parameters.AddWithValue("@MovieDuration", movie.Duration);
                    myCommand.Parameters.AddWithValue("@MovieReleaseDate", movie.ReleaseDate);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    conn.Close();
                }
            }
            return new JsonResult("Updated Sucessfully");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                delete from movies where Id = @MovieId;
            ";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            MySqlDataReader myReader;
            using (MySqlConnection conn = new MySqlConnection(sqlDataSource))
            {
                conn.Open();
                using (MySqlCommand myCommand = new MySqlCommand(query, conn))
                {
                    myCommand.Parameters.AddWithValue("@MovieId", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);

                    myReader.Close();
                    conn.Close();
                }
            }
            return new JsonResult("Deleted Sucessfully");
        }
    }
}
