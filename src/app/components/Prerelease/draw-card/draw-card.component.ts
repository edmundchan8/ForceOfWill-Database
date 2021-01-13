import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../../../interaction.service'

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css']
})

export class DrawCardComponent implements OnInit {
  constructor(private _interactionService: InteractionService) { }

  public drawnCards = []
  public currentDraftedCards = []
  public maxDrawLimit = 8

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
          console.log("11 draw-card drawing card")
          this.drawnCards.push(message)
          console.log("12 draw-card push card draft")
          this.currentDraftedCards.push(message)
      })

      this._interactionService.clearCards$
      .subscribe(
        message => {
          console.log("3 interact clearcards")
          this.clearCards()
        })


      this._interactionService.setCardList$
      .subscribe(
        message =>{
          this.sendDrawnCards(this.drawnCards)
        }
      )
  }

  clearCards(){
    console.log("4 set Drawncards to => " + this.drawnCards)
    this.drawnCards = []
  }

  sendDrawnCards(array){
    this._interactionService.sendDrawnCards(array)
  }
}