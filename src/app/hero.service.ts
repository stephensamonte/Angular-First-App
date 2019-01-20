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

// The heroes web API expects a special header in HTTP save requests. 
// That header is in the httpOptions constant defined in the HeroService.
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
    /** GET hero by id. Will 404 if id not found */
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

  
  /** PUT: update the hero on the server */
  updateHero (hero: Hero): Observable<any> {

    // The HttpClient.put() method takes three parameters 
    // the URL the data to update (the modified hero in this case) options
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  // it calls HttpClient.post() instead of put().
  // .post expects the server to generate an id for the new hero,
  //  which it returns in the Observable<Hero> to the caller.
  addHero (hero: Hero): Observable<Hero> {
      return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
        tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
        catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    
    // The method returns immediately with an empty 
    // array if there is no search term.
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
