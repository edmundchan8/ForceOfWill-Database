import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
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
  private _drawCardSource = new Subject<IBoosterCards>()
  private _clearDrawnCardsSource = new Subject<IBoosterCards>()
  // Then, expose the subjects above as observables
  sendRandom$ = this._sendRanSource.asObservable()
  createRandom$ = this._createRanNumSource.asObservable()
  confirmID$ = this._confirmIDSource.asObservable()
  getCard$ = this._getCardSource.asObservable()
  getNCard$ = this._getNCardSource.asObservable()
  getRCard$ = this._getRCardSource.asObservable()
  getSRCard$ = this._getSRCardSource.asObservable()
  getMRCard$ = this._getMRCardSource.asObservable()
  drawCard$ = this._drawCardSource.asObservable()
  clearCards$ = this._clearDrawnCardsSource.asObservable()

  constructor() { }
  // create a method that accepts a value from random component and pushed it via an observable
  createRandomNumber(){
    this._createRanNumSource.next()
  }

  sendRandomNumber(value){
    this._sendRanSource.next(value)
  }

  confirmID(value){
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

  drawCard(card){
    this._drawCardSource.next(card)
  }

  clearDrawnCards(){
    this._clearDrawnCardsSource.next()
  }
}
