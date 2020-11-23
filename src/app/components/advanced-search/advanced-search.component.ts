import { Component, OnInit } from '@angular/core';
import { TradingcardsService } from 'src/app/tradingcards.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnInit {
  public tradingCardArray = []
  public tradingCard

  constructor(private _tradingCardsService: TradingcardsService) { }

  ngOnInit(): void {
    this._tradingCardsService.getTradingCards()
    .subscribe(data => this.tradingCardArray = data);
  }

  onClickSearch(params){
    this.tradingCard = this.tradingCardArray[params]
  } 
}