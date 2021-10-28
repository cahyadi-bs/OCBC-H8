import { Component, OnInit } from '@angular/core';
import { Country } from '../models/Country';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // @Output() newHomeCountryEvent = new EventEmitter<Country>();
  countrySingle:any = {};
  dataFromAll:any = {};

  countries:Country[] = [];
  isInHome = true;
  isInAll = false;
  isInDetail = false;



  ngOnInit(): void {
    this.countries = [
      {
        countryName:"United States",
        capital: "Washington. D.C.",
        area: 9525067,
        population: 325365189,
        gdp: 18569100,
        currencyCountry: "United Stated Dollar"
      },
      {
        countryName:"Russia",
        capital: "Moscow",
        area: 17098246,
        population: 146793744,
        gdp: 17100000,
        currencyCountry: "Russian Ruble"
      },
      {
        countryName:"China",
        capital: "Beijing",
        area: 1411778724,
        population: 1427647786 ,
        gdp: 26600000,
        currencyCountry: "Renminbi"
      },
      {
        countryName:"Japan",
        capital: "Tokyo",
        area: 377975,
        population: 125360000,
        gdp: 5560000,
        currencyCountry: "Yen"
      },
      {
        countryName:"Canada",
        capital: "Ottawa",
        area: 9984670,
        population: 38246108,
        gdp: 20270000,
        currencyCountry: "Canada Dollar"
      }
    ]
  }

  sortByArea(){
    return this.countries.sort((a, b) => (a.area < b.area) ? 1 : -1);
  }

  sortByPopulation(){
    return this.countries.sort((a, b) => (a.population < b.population) ? 1 : -1);
  }

  goToHome(){
    this.isInHome = true;
    this.isInAll = false;
    this.isInDetail = false;
    this.countrySingle = {};
    this.dataFromAll={};
  }

  goToAll(){
    this.isInHome = false;
    this.isInAll = true;
    this.isInDetail = false;
  }

  goToDetail(countryName:string){
    this.isInHome = false;
    this.isInAll = false;
    this.isInDetail = true;
    this.countrySingle = this.countries.find(x => x.countryName === countryName);
    console.log(this.countrySingle);
  }

  forwardData(country:Country){
    this.isInHome = false;
    this.isInAll = false;
    this.isInDetail = true;
    this.countrySingle = country;
    console.log(this.dataFromAll);
  }

  resetHome(){
    this.isInHome = true;
    this.isInAll = false;
    this.isInDetail = false;
    this.countrySingle = {};
    this.dataFromAll={};
  }
}
