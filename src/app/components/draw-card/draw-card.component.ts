import { Component, OnInit } from '@angular/core';
import { BoosterCardsService } from 'src/app/booster-cards.service';
import { InteractionService } from '../../interaction.service'

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css']
})
export class DrawCardComponent implements OnInit {
  constructor(public _interactionService: InteractionService) { }

  public drawnCard

  ngOnInit(): void {
    this._interactionService.drawCard$
    .subscribe(
      message => {
        this.drawnCard = message
      })
  }

  // drawCard(){
  //   this._interactionService.getCard()
  // }

  drawNRarity(){
    // generate random number
    
    // if random number matches card in array that is rarity N
    // draw card
    // otherwise, repeat, until we find an N rarity card
  }
}
