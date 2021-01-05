import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IBoosterCards } from './booster-cards'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoosterCardsService {

  //FOR DEVELOPEMENT PURPOSES
  // private _url: string = "/assets/data/draftCards.json";

  //FOR PRODUCTION PURPOSES
  private _url: string = "https://raw.githubusercontent.com/edmundchan8/ForceOfWill-Database/master/src/assets/data/draftCards.json";

  constructor(private http: HttpClient) { }

  getCards(): Observable<IBoosterCards[]>{
    return this.http.get<IBoosterCards[]>(this._url)
  }
}
