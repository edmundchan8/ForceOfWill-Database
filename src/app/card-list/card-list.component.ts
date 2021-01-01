import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../interaction.service'

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(public _interactionService: InteractionService) { }

  public currentDraftedCardsBasedHash = []
  //hash instead of 'content'
  public content = ""
  public hash = { }

  ngOnInit(): void {
    this._interactionService.sendDrawnCards$
    .subscribe(
      message => {
        this.AddCardsToHashTable(message)
    })

    // this._interactionService.sendCurrentDraftedCards$
    // .subscribe(
    //   message => {
    //     this.currentDraftedCards = message
    // })
  }

  exportCardsToText() {
    this.content = ""
    var rowWidth=50
    var i
    for (i = 0; i < this.currentDraftedCardsBasedHash.length; i++){
      //the key is a STRING atm
      this.content += '\n ' + this.hash[this.currentDraftedCardsBasedHash[i].id] + " x " + this.currentDraftedCardsBasedHash[i].name + " (" + this.currentDraftedCardsBasedHash[i].set + ")"
    }
  }

  //need way to not keep destroying hash here
  //TODO should be add cards to current hash table
    AddCardsToHashTable(array){
    for (let i = 0; i < array.length; i++){
      if(this.hash[array[i].id]){
        this.hash[array[i].id]++
      }
      else{
        this.hash[array[i].id] = 1
        this.currentDraftedCardsBasedHash.push(array[i])
      }
    }
    this.exportCardsToText()
  }
}