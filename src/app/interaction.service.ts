import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { IBoosterCards } from './booster-cards'

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  public randomNumber

  // Subject is like a source that sends messages to the component
  private _sendRanSource = new Subject<string>()
  private _createRanNumSource = new Subject<number>()
  private _confirmIDSource = new Subject<string>()
  private _getCardSource = new Subject<number>()
  private _getNCardSource = new Subject<number>()
  private _getRCardSource = new Subject<number>()
  private _getSRCardSource = new Subject<number>()
  private _getMRCardSource = new Subject<number>()
  private _getRulerCardSource = new Subject<number>()
  private _drawCardSource = new Subject<IBoosterCards>()
  private _clearDrawnCardsSource = new Subject<IBoosterCards>()
  private _sendDrawnCardsSource = new Subject<IBoosterCards[]>()
  private _sendCurrentDraftedCardsSource = new Subject<IBoosterCards[]>()
  private _setCardListSource = new Subject()
  // Then, expose the subjects above as observables
  sendRandom$ = this._sendRanSource.asObservable()
  createRandom$ = this._createRanNumSource.asObservable()
  confirmID$ = this._confirmIDSource.asObservable()
  getCard$ = this._getCardSource.asObservable()
  getNCard$ = this._getNCardSource.asObservable()
  getRCard$ = this._getRCardSource.asObservable()
  getSRCard$ = this._getSRCardSource.asObservable()
  getMRCard$ = this._getMRCardSource.asObservable()
  getRulerCard$ = this._getRulerCardSource.asObservable()
  drawCard$ = this._drawCardSource.asObservable()
  clearCards$ = this._clearDrawnCardsSource.asObservable()
  sendDrawnCards$ = this._sendDrawnCardsSource.asObservable()
  sendCurrentDraftedCards$ = this._sendCurrentDraftedCardsSource.asObservable()
  setCardList$ = this._setCardListSource.asObservable()

  constructor(@Optional() @SkipSelf() parent?: InteractionService) {
    if (parent) {
      throw Error(
        `[Interaction]: trying to create multiple instances,
        but this service should be a singleton.`
      );
    }
  }


  // create a method that accepts a value from random component and pushed it via an observable
  createRandomNumber(){
    this._createRanNumSource.next()
  }

  sendRandomNumber(value){
    this._sendRanSource.next(value)
  }

  confirmID(value){
    console.log("6 interact confirmID")
    this._confirmIDSource.next(value)
  }

  getCardFromID(value){
    this._getCardSource.next(value)
  }

  getNCardFromID(value){
    this._getNCardSource.next(value)
  }
  getRCardFromID(value){
    this._getRCardSource.next(value)
  }
  getSRCardFromID(value){
    this._getSRCardSource.next(value)
  }
  getMRCardFromID(value){
    this._getMRCardSource.next(value)
  }

  getRulerCardFromID(value){
    this._getRulerCardSource.next(value)
  }

  drawCard(card){
    console.log("10 interact drawCard")
    this._drawCardSource.next(card)
  }

  clearDrawnCards(){
    console.log("2 interact clearDrawnCards")
    this._clearDrawnCardsSource.next()
  }

  sendDrawnCards(array){
    this._sendDrawnCardsSource.next(array)
  }

  setCardListArray(){
    this._setCardListSource.next()
  }

  // sendCurrentDraftedCards(array){
  //   this._sendCurrentDraftedCardsSource.next(array)
  // }
}
