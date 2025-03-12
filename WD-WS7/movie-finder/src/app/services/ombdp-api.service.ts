import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError} from "rxjs";
import { catchError, tap } from 'rxjs';
import {IOMDBResponse} from '../omdbResponse';

@Injectable({
  providedIn: 'root'
})

export class OmbdpApiService {

  private _siteURL = "https://www.omdbapi.com/"
  private _key = "?apikey=48e9ea2e"
  constructor(private _http:HttpClient) { }

  getMovieData(movieName:string):Observable<IOMDBResponse> {
    return this._http.get<IOMDBResponse>(this._siteURL+this._key+"&t="+movieName)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
  );
  }

  private handleError(err:HttpErrorResponse) {
    console.log('OmdbApiService:' + err.message);
    return throwError(() => new Error("OmdbApiService:" + err.message))
  }
}
