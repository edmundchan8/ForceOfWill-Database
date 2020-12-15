import { Component, OnInit } from '@angular/core';
import { BoosterCardsService } from 'src/app/booster-cards.service';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css']
})
export class DrawCardComponent implements OnInit {

  constructor(public _boosterCardsSerivce: BoosterCardsService) { }

  drawNRarity(){
    // generate random number
    
    // if random number matches card in array that is rarity N
    // draw card
    // otherwise, repeat, until we find an N rarity card
  }
  ngOnInit(): void {
  }

}
