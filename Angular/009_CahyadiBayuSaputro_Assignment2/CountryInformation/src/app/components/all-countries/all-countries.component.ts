import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Country } from '../models/Country';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.css']
})
export class AllCountriesComponent implements OnInit {
  @Output() newAllCountryEvent = new EventEmitter<Country>();
  @Input() countryData : Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  goToDetail(countryName:string){
    const countrySingle = this.countryData.find(x => x.countryName === countryName);
    console.log(countrySingle);
    this.newAllCountryEvent.emit(countrySingle);
  }
}
