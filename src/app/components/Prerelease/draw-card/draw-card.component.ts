import { Component, OnDestroy } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { InteractionService } from '../../../interaction.service'

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.css']
})

export class DrawCardComponent implements OnDestroy {
  subscription = new Subscription()

  constructor(private _interactionService: InteractionService) { 
    this.subscription.add(this._interactionService.drawCard$
    .subscribe(
      message => {
          this.drawnCards.push(message)
          this.currentDraftedCards.push(message)
      })
    )

    this.subscription.add(this._interactionService.setCardList$
      .subscribe(
        message =>{
          this.sendDrawnCards(this.drawnCards)
        })
    )

    this.subscription.add(this._interactionService.clearCards$
      .subscribe(
      message => {
        this.clearCards()
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

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

  clearCards(){
    this.drawnCards = []
  }

  sendDrawnCards(array){
    this._interactionService.sendDrawnCards(array)
  }
}