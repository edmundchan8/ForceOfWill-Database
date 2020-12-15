import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  public randomNumber

  // Subject is like a source that sends messages to the component
  private _sendRanSource = new Subject<string>()
  private _getRanNumSource = new Subject<number>()
  // Then, expose the subjects above as observables
  sendRandom$ = this._sendRanSource.asObservable()
  getRandom$ = this._getRanNumSource.asObservable()

  constructor() { }
  // create a method that accepts a value from random component and pushed it via an observable
  getRandomNumber(){
    this._getRanNumSource.next()
  }

  sendRandomNumber(value){
    this._sendRanSource.next(value)
  }
}
