import { Component, OnInit } from '@angular/core';
import { CardApiService } from '../../../card-api.service'

@Component({
  selector: 'app-card-api',
  templateUrl: './card-api.component.html',
  styleUrls: ['./card-api.component.css']
})
export class CardApiComponent implements OnInit {

  constructor(private cardApiService: CardApiService) { }

  public age
  public count
  public name
  public country

  ngOnInit(): void {
    
  }

  getAge(name: string){
    this.cardApiService.getAgeFromName(name)
    .subscribe(message => {
      this.name = name,
      this.age = message.age,
      this.count = message.count
      this.country = ""
    })
  }

  getCountry(name: string, country: string){
    this.cardApiService.getCountryAndName(name, country)
    .subscribe(message => {
      this.name = name,
      this.age = message.age,
      this.count = message.count
      this.country = country
    })
  }
}
