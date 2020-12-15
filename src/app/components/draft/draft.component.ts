import { Component, OnInit } from '@angular/core';
import { BoosterCardsService } from '../../booster-cards.service'

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  public boosterSet = "The Epic of the Dragon Lord"
  public cardsArray = []
  
  constructor(public _boosterCardsService: BoosterCardsService) { }

  ngOnInit(): void {
    this._boosterCardsService.getCards()
    .subscribe(data => this.cardsArray = data)
    }

}
