import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {

  public boosterSet = "The Epic of the Dragon Lord"
  public cardsArray
  
  constructor() { }

  ngOnInit(): void {
  }

  draftCards(){
    this.cardsArray = [
      {"Name": "Abhorrent Revival"},
      {"Name": "Academy Guard of Lykeion"},
      {"Name": "Altesing, Mischievous Boy // A Glimpse of the Prodigy"},
      {"Name": "Altesing's Secret Hideout"},
      {"Name": "Appraisal of Treasures"},
      {"Name": "Arle, the Seven-Tailed Fox // Arle's Flame"},
      {"Name": "Arm of the Demon"},
      {"Name": "Bone Dragon"},
      {"Name": "Burning Rabbit Dash"},
      {"Name": "Chasing Dragon"},
      {"Name": "Chelina, Sorceress of Sending Back // Send Back"},
      {"Name": "Claw of the Dragonoid"}
  ]
  console.log("click")
    return this.cardsArray
  }
}
