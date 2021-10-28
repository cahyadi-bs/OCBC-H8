import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Country } from '../models/Country';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css']
})
export class CountryDetailComponent implements OnInit {
  @Output() DetailEvent = new EventEmitter();
  @Input() countrySingleDetail:any = {};
  //@Input() dataFromAll:any={};

  constructor() { }

  ngOnInit(): void {
  }

  reset(){
    this.DetailEvent.emit();
  }


}
