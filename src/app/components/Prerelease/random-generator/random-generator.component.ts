import { Component, OnInit } from '@angular/core';
import { BoosterCardsService } from 'src/app/booster-cards.service';
import { InteractionService } from '../../../interaction.service'

@Component({
  selector: 'app-random-generator',
  templateUrl: './random-generator.component.html',
  styleUrls: ['./random-generator.component.css']
})
export class RandomGeneratorComponent implements OnInit {

  public arraySize
  public randomNumber  

  public numberNormal = 55
  public numberRare = 20
  public numberSuperRare = 15
  public numberMarvel = 5
  public numberRuler = 6
  public numberUncommon // Before Alice Origin I
  public numberSecret // Before Alice Origin I
  public boosterCardSize = 100


  constructor(public _boosterCardsSerivce: BoosterCardsService, 
    public _interactionService: InteractionService) {}

   generateRandomNumber(rarity){
    switch(rarity)
    {
      case 'Normal':
        this.arraySize = this.numberNormal
        break;
      case 'Rare':
        this.arraySize = this.numberRare
        break;
      case 'Ruler':
        this.arraySize = this.numberRuler
        break;
      case 'Super Rare':
        this.arraySize = this.numberSuperRare
        break;
      case 'Marvel Rare':
        this.arraySize = this.numberMarvel
        break;
      default:
        this.arraySize = this.boosterCardSize
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