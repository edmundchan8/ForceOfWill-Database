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

  public drawnCard = []

  ngOnInit(): void {
    console.log(this.drawnCard)
    this._interactionService.drawCard$
    .subscribe(
      message => {
        if (this.drawnCard.length < 8)
          this.drawnCard.push(message)
      })
  }
}
