import { Component, OnInit } from '@angular/core';
import { BoosterCardsService } from 'src/app/booster-cards.service';
import { InteractionService } from '../../interaction.service'

@Component({
  selector: 'app-random-generator',
  templateUrl: './random-generator.component.html',
  styleUrls: ['./random-generator.component.css']
})
export class RandomGeneratorComponent implements OnInit {

  public arraySize
  public randomNumber
  constructor(public _boosterCardsSerivce: BoosterCardsService, 
    public _interactionService: InteractionService) {}

   generateRandomNumber(rarity){
    switch(rarity)
    {
      case 'Normal':
        this.arraySize = 55
        break;
      case 'Rare':
        this.arraySize = 20
        break;
      case 'Ruler':
        this.arraySize = 6
        break;
      case 'Super Rare':
        this.arraySize = 15
        break;
      case 'Marvel Rare':
        this.arraySize = 5
        break;
      default:
        this.arraySize = 100
        break;
    }
     return this.randomNumber = Math.floor(( Math.random() * this.arraySize))
    }

   sendRandomNumber(value){
    this._interactionService.sendRandomNumber(value)
   }

   getRandomNumber(){
     return this.randomNumber
   }

  ngOnInit(): void {
    this._interactionService.createRandom$
    .subscribe(
      message => {
        this.randomNumber = this.generateRandomNumber(message)
      }
    )

    this._interactionService.confirmID$
    .subscribe(
      message => {
        this.generateRandomNumber(message)
        if (message === 'random') {
          this._interactionService.getCardFromID(this.randomNumber)
        }
        else if (message === 'Normal') {
          this._interactionService.getNCardFromID(this.randomNumber)
        }
        else if (message === 'Rare') {
          this._interactionService.getRCardFromID(this.randomNumber)
        }
        else if (message === 'Super Rare') {
          this._interactionService.getSRCardFromID(this.randomNumber)
        }
        else if (message === 'Marvel Rare') {
          this._interactionService.getMRCardFromID(this.randomNumber)
        }
        else if (message === 'Ruler') {
          this._interactionService.getRulerCardFromID(this.randomNumber)
        }
        else
        this._interactionService.getCardFromID(message)
      }
    )
    
    this._interactionService.sendRandom$
    .subscribe(
      message => {
        return this.randomNumber
      })
  }
}