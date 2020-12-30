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

    //instead of 1
    //use the value of the 'key' in my hash table

    //instead of this.cardArray[i].name, use the 'key'
    for (i = 0; i < this.cardArray.length; i++){
      this.content += '\n 1 ' + this.cardArray[i].name + " (" + this.cardArray[i].set + ")"
      }
    }
  }

  //create hash table
  class HashTable {
    public values
    public length
    public size
    constructor() {
      this.values = {};
      this.length =  0;
      this.size =  0;
    }

    //hasing function
    calculateHash(key) {
      return key.toString().length % this.size;
     }

    add(key, value) {
      const hash = this.calculateHash(key);
      if (!this.values.hasOwnProperty(hash)) {
          this.values[hash] = {};
      }
      if (!this.values[hash].hasOwnProperty(key)) {
          this.length++;
      }
      this.values[hash][key] = value;
    }


  }