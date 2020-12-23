import { Component, OnInit } from '@angular/core';
import { BoosterCardsService } from 'src/app/booster-cards.service';
import { InteractionService } from '../../interaction.service'

@Component({
  selector: 'app-random-generator',
  templateUrl: './random-generator.component.html',
  styleUrls: ['./random-generator.component.css']
})
export class RandomGeneratorComponent implements OnInit {

  public arraySize = 100
  public randomNumber
  constructor(public _boosterCardsSerivce: BoosterCardsService, 
    public _interactionService: InteractionService) {}

   generateRandomNumber(){
     return this.randomNumber = Math.floor(( Math.random() * this.arraySize) + 1)
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
        this.randomNumber = this.generateRandomNumber()
      }
    )

    this._interactionService.confirmID$
    .subscribe(
      message => {
        if (message === 'random')
        {
          this.generateRandomNumber()
          this._interactionService.getCardFromID(this.randomNumber)
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