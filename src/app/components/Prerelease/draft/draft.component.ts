import { Component, OnInit } from '@angular/core';
// import {MatSnackBar} from '@angular/material/snack-bar';
import { MaterialModule } from '../../../material/material.module'
import { BoosterCardsService } from '../../../booster-cards.service'
import { InteractionService } from '../../../interaction.service'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  public chosenBoosterSet = "The Epic of the Dragon Lord"
  public cardsArray = []
  public boostersDrafted = 0
  public selected

  public boosterDraftSize = 6

  //random variable holder just for draftcomponent
  public draftRandom
  
  constructor(public _boosterCardsService: BoosterCardsService, 
    public _interactionService: InteractionService,
    private _snackBar: MatSnackBar ) { }

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
      this._interactionService.getRulerCard$
    .subscribe(
      message => {    
        this.drawCard(this.cardsArray.filter(card => card.rarity == 'Ruler')[message])
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

  draftBooster(){
    console.log("1 click draftBooster")
    if(this.boostersDrafted != this.boosterDraftSize)
    {
      this.boostersDrafted++
      this._interactionService.clearDrawnCards()
      var NCards = 6
      console.log("5 entering While loop for N Cards")
      while (NCards > 0){
        this.findCard('Normal')
        NCards--
      }
      console.log("6 begin create random number for 7th card")
      var randomRarity = Math.floor(( Math.random() * 72))
      if (randomRarity > 70)
        this.findCard('Ruler')
      else if (randomRarity > 0 && randomRarity <= 10)
        this.findCard('Marvel Rare')
      else if (randomRarity >= 25 && randomRarity <= 50 )
        this.findCard('Super Rare')
      else
        this.findCard('Rare')

      console.log("7 begin finding random card")
      this.findCard('random')
      console.log("8 entering interact setCardListArray")
      this._interactionService.setCardListArray()
      this.openBoosterSnackBar("Dismiss")
      console.log("10 end of if part of draftBooster()")
    }
    else
      this.onMaxBoostersDraftedSnackBar()
      console.log("11 end of draftBooster()")
  }

  openBoosterSnackBar(action: string){
    this._snackBar.open("You've opened " + this.boostersDrafted + " boosters.",
     action,
     {duration: 3000})
  }
s
  onMaxBoostersDraftedSnackBar(){
    this._snackBar.open("You cannot open anymore boosters", "dismiss", {duration: 3000})
  }

}