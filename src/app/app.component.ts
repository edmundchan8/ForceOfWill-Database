import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'ForceOfWill-Database';
  public tradingCard

  public cardDatabase = [
    {CardName: "Card 01", CardColor: "Light"},
    {CardName: "Card 02", CardColor: "Darkness"}
  ]

  onClickSearch(params){
    this.tradingCard = this.cardDatabase[params]
    console.log(this.tradingCard.CardName)
  }
}