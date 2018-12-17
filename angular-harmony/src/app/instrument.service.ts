import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Instrument } from './instrument';


//import { MessageService } from './message.service'; 



//const httpOptions = {
  //headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//};

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
//private  instrumentsUrl = 'http://localhost:7070/instruments'
 //private instrumentsUrl = 'api/instruments';  // URL to web api
  constructor(private http: HttpClient) {}
  public getInstruments(){
    return this.http.get('http://localhost:7070/instruments').subscribe((data) => { console.log(data);
   });
   }
  //private http: HttpClient,
  //private messageService: MessageService { } 
  /*getInstruments(): Observable<Instrument[]> {
  return this.http.get<Instrument[]>(this.instrumentsUrl)
      .pipe(
        tap(_ => this.log('fetched instruments')),
        catchError(this.handleError('getInstruments', []))
      );
}

/** GET instrument by id. Return `undefined` when id not found */
/*getInstrumentNo404<Data>(id: number): Observable<Instrument> {
    const url = `${this.instrumentsUrl}/?id=${id}`;
    return this.http.get<Instrument[]>(url)
      .pipe(
        map(instruments => instruments[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} instrument id=${id}`);
        }),
        catchError(this.handleError<Instrument>(`getInstrument id=${id}`))
      );
  }

   /** GET instrument by id. Will 404 if id not found */
  /*getInstrument(id: number): Observable<Instrument> {
    const url = `${this.instrumentsUrl}/${id}`;
    return this.http.get<Instrument>(url).pipe(
     tap(_ => this.log(`fetched instrument id=${id}`)),
      catchError(this.handleError<Instrument>(`getInstrument id=${id}`))
    );
  }
  /* GET instruments whose name contains search term */
 /* searchInstruments(term: string): Observable<Instrument[]> {
    if (!term.trim()) {
       //if not search term, return empty instrument array.
      return of([]);
    }
    return this.http.get<Instrument[]>(`${this.instrumentsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found instruments matching "${term}"`)),
      catchError(this.handleError<Instrument[]>('searchInstruments', []))
    );
  }
  //////// Save methods //////////
 
  /** POST: add a new instrument to the server */
  /*addInstrument (instrument: Instrument): Observable<Instrument> {
    return this.http.post<Instrument>(this.instrumentsUrl, instrument, httpOptions).pipe(
      tap((instrument: Instrument) => this.log(`added instrument w/ id=${instrument.id}`)),
      catchError(this.handleError<Instrument>('addInstrument'))
    );
  }
 
  /** DELETE: delete the instrument from the server */
  /*deleteInstrument (instrument: Instrument | number): Observable<Instrument> {
    const id = typeof instrument === 'number' ? instrument : instrument.id;
    const url = `${this.instrumentsUrl}/${id}`;
 
    return this.http.delete<Instrument>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted instrument id=${id}`)),
      catchError(this.handleError<Instrument>('deleteInstrument'))
    );
  }
  /** PUT: update the instrument on the server */
  /*updateInstrument (instrument: Instrument): Observable<any> {
    return this.http.put(this.instrumentsUrl, instrument, httpOptions).pipe(
      tap(_ => this.log(`updated instrument id=${instrument.id}`)),
      catchError(this.handleError<any>('updateInstrument'))
    );
  }
 
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  /*private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
     this.log(`${operation} failed: ${error.message}`);

 // Let the app keep running by returning an empty result.
       return of(result as T);
    };
  }
 
  /** Log a InstrumentService message with the MessageService */
  //private log(message: string) {
  //this.messageService.add(`InstrumentService: ${message}`);
  //}
}
