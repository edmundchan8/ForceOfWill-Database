import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IAgeFromName } from './age-from-name'
import { throwError as observableThrowError, Observable } from 'rxjs'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardApiService {

  private _url: string = "https://api.agify.io/?name="

  //https://api.agify.io?name=michael
  //https://api.agify.io?name[]=michael&name[]=matthew&name[]=jane
  //https://api.agify.io?name=michael&country_id=US

  constructor(private http: HttpClient) {}

  getData(): Observable<IAgeFromName>{
    return this.http.get<IAgeFromName>(this._url).pipe(
      catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError( error.message || console.log("Server Error"))
  }

  getAgeFromName(name: string): Observable<IAgeFromName>{
    const url = this._url + name
    // return this.http.get<IAgeFromName>(url)
      return this.http.get<IAgeFromName>(url).pipe(
        catchError(this.errorHandler)
      )
  }

  getCountryAndName(name: string, country: string): Observable<IAgeFromName>{
    const url = this._url + name + "&country_id=" + country
    console.log(url)
    return this.http.get<IAgeFromName>(url).pipe(
      catchError(this.errorHandler)
    )}
}