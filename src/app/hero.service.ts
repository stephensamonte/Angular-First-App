import { Injectable } from '@angular/core';

// you'll simulate getting data from the server with the RxJS of() function.
import { Observable, of } from 'rxjs';

// inject message into hero service
// This is a typical "service-in-service" scenario: 
// you inject the MessageService into the HeroService which 
// is injected into the HeroesComponent.
import { MessageService } from './message.service';

// Import hero class
import { Hero } from './hero';
// Import mock hero list data 
// import { HEROES } from './mock-heroes';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// Error Handling between server
// To catch errors, you "pipe" the observable result from http.get() 
// through an RxJS catchError() operator.
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // Define the heroesUrl of the form :base/:collectionName with the 
  // address of the heroes resource on the server. Here base is the resource 
  // to which requests are made, and collectionName is the heroes data object 
  // in the in-memory-data-service.ts.
  private heroesUrl = 'api/heroes';  // URL to web api

  // constructor() { }
  // a parameter that declares a private messageService property. 
  // Angular will inject the singleton MessageService into that 
  // property when it creates the HeroService.
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  // return the data 
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');

    // of(HEROES) returns an Observable<Hero[]> 
    // that emits a single value, the array of mock heroes.
    // return of(HEROES);

    // get hero from server 
    // HttpClient.get returns the body of the response as an untyped 
    // JSON object by default. Applying the optional type specifier, 
    // <Hero[]> , gives you a typed result object.
    // return this.http.get<Hero[]>(this.heroesUrl)
    
    // Error handling
    // return this.http.get<Hero[]>(this.heroesUrl)
    // .pipe(
    //   catchError(this.handleError('getHeroes', []))
    // );

    // The HeroService methods will tap into the flow of observable values 
    // and send a message (via log()) to the message area at the bottom 
    // of the page.
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  // Get a single hero by id
  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero
    // The backticks (`) that define a JavaScript template literal for embedding the id.
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));


    // Get hero from server 
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
