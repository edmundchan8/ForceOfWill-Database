import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  public randomNumber

  // Subject is like a source that sends messages to the component
  private _randomSource = new Subject<string>()
  private _randomNumSource = new Subject<number>()
  // Expose subject as an observable
  callRandom$ = this._randomSource.asObservable()
  getRandom$ = this._randomNumSource.asObservable()

  constructor() { }

  callRandomGenerator(){
    this._randomSource.next()
  }

  getRandomNumber(){
    this._randomNumSource.next()
  }
}
