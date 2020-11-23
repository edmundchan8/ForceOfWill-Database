import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICards } from './cards';

@Injectable({
  providedIn: 'root'
})
export class TradingcardsService {

  // point this later to a web server
  private _url: string = "assets/data/cards.json"
  constructor(private http: HttpClient) { }
  
  getTradingCards(): Observable<ICards[]>{
    return this.http.get<ICards[]>(this._url);
  }
}
