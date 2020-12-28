import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service'

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(public _interactionService: InteractionService) { }

  public content = ""
  public cardArray = []

  ngOnInit(): void {
    this._interactionService.sendDrawnCards$
    .subscribe(
      message => {
        this.cardArray = message
    })
  }

  exportCardsToText(){
    this.content = ""
    var rowWidth=50
    var i
    for (i = 0; i < this.cardArray.length; i++){
    for (i = 0; i < this.cardArray.length; i++){
      this.content += '\n' + this.cardArray[i].name + " (" + this.cardArray[i].set + ")"
      }
    }
  }
}