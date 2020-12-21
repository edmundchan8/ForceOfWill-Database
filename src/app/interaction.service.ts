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
  private _getCardSource = new Subject<number>()
  private _sendCardSource = new Subject<IBoosterCards>()
  // Then, expose the subjects above as observables
  sendRandom$ = this._sendRanSource.asObservable()
  createRandom$ = this._createRanNumSource.asObservable()
  getCard$ = this._getCardSource.asObservable()
  sendCard$ = this._sendCardSource.asObservable()

  constructor() { }
  // create a method that accepts a value from random component and pushed it via an observable
  createRandomNumber(){
    this._createRanNumSource.next()
  }

  sendRandomNumber(value){
    this._sendRanSource.next(value)
  }

  getRandomCard(value){
    this._getCardSource.next(value)
  }

  sendCard(card){
    this._sendCardSource.next(card)
  }
}
