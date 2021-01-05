import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IAgeFromName } from './age-from-name'
import { throwError as observableThrowError, Observable } from 'rxjs'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  private _url: string = "https://api.agify.io/"

  constructor(private http: HttpClient) {}

  getData(): Observable<IAgeFromName[]>{
    return this.http.get<IAgeFromName[]>(this._url).pipe(
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error")
  }
}