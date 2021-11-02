import { Component, OnInit , Input} from '@angular/core';
import { Payment } from 'src/app/models/Payment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() payments: Payment[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
