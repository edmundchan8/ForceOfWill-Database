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

    this._interactionService.getNCard$
    .subscribe(
      message => {    
        this.drawCard(this.cardsArray.filter(card => card.rarity == 'Normal')[message])
      })
    this._interactionService.getRCard$
    .subscribe(
      message => {    
        this.drawCard(this.cardsArray.filter(card => card.rarity == 'Rare')[message])
      })
    this._interactionService.getSRCard$
    .subscribe(
      message => {    
        this.drawCard(this.cardsArray.filter(card => card.rarity == 'Super Rare')[message])
      })
    this._interactionService.getMRCard$
    .subscribe(
      message => {    
        this.drawCard(this.cardsArray.filter(card => card.rarity == 'Marvel Rare')[message])
      })
    }

  createRandom(){
    this._interactionService.createRandomNumber()
  }

  findCard(cardId){
    this._interactionService.confirmID(cardId)
  }

  drawCard(card){
    this._interactionService.drawCard(card)
  }
}
