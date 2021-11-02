import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/models/Payment';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  payments: Payment[] =[]

  header = 'Payment Detail Register'

  constructor( public paymentService:PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getAll().subscribe((data: Payment[])=>{
      this.payments = data;
      console.log(this.payments);
    })  
  }

}
