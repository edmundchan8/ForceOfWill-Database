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
  constructor(public _boosterCardsSerivce: BoosterCardsService, public _interactionService: InteractionService) {  
   }

   randomNumber(){
    return Math.floor(( Math.random() * this.arraySize) + 1)
   }

   sendRandomNumber(value){
    this._interactionService.sendRandomNumber(value)
   }

  ngOnInit(): void {
    this._interactionService.createRandom$
    .subscribe(
      message => {
        this.sendRandomNumber(this.randomNumber())
      }
    )
  }
}