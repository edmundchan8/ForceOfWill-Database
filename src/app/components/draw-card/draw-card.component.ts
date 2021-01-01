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

  public drawnCards = []
  public currentDraftedCards = []
 

  getColor(will) {
    switch (will) {
      case 'Fire':
        return '#d0050c';
      case 'Water':
        return '#c4ecf6';
      case 'Wind':
        return '#40d659';
      case 'Light':
        return '#fbdd01';
      case 'Darkness':
        return '#9524b3';
      case 'Multi':
        return 'White';
      case 'Void':
        return 'Gray';
      default:
        return 'White';
    }
  }

  ngOnInit(): void {
    this._interactionService.drawCard$
    .subscribe(
      message => {
        if (this.drawnCards.length < 8)
          this.drawnCards.push(message)
          this.currentDraftedCards.push(message)
      })

      this._interactionService.clearCards$
      .subscribe(
        message => {
          this.clearCards()
        }
      )
      this._interactionService.setCardList$
      .subscribe(
        message =>{
          // this.sendCurrentDraftedCards()
          this.sendDrawnCards(this.drawnCards)
        }
      )
  }

  clearCards(){
    this.drawnCards = []
  }

  sendDrawnCards(array){
    this._interactionService.sendDrawnCards(array)
  }

  // sendCurrentDraftedCards(){
  //   this._interactionService.sendCurrentDraftedCards(this.currentDraftedCards)
  // }
}