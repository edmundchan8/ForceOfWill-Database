import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TradingcardsService } from 'src/app/tradingcards.service';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css']
})
export class AdvancedSearchComponent implements OnDestroy {
  public tradingCardArray = []
  public tradingCard
  subscription = new Subscription()

  constructor(private _tradingCardsService: TradingcardsService) {
      this.subscription.add(
        this._tradingCardsService.getTradingCards()
        .subscribe(data => this.tradingCardArray = data)
      )
   }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  onClickSearch(params){
    this.tradingCard = this.tradingCardArray[params]
  } 
}