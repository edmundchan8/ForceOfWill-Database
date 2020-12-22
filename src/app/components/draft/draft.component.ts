import { Component, OnInit } from '@angular/core';
import { BoosterCardsService } from '../../booster-cards.service'
import { InteractionService } from '../../interaction.service'

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  public boosterSet = "The Epic of the Dragon Lord"
  public cardsArray = []

  //random variable holder just for draftcomponent
  public draftRandom
  
  constructor(public _boosterCardsService: BoosterCardsService, 
    public _interactionService: InteractionService) { }

  ngOnInit(): void {
    this._boosterCardsService.getCards()
    .subscribe(data => this.cardsArray = data)

    this._interactionService.getCard$
    .subscribe(
      message => {
        this.drawCard(this.cardsArray[message])
      })
    }

  createRandom(){
    this._interactionService.createRandomNumber()
  }

  findCard(cardId){
    this._interactionService.getCardFromID(cardId)
  }

  drawCard(card){
    this._interactionService.drawCard(card)
  }
}
