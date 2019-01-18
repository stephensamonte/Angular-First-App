import { Injectable } from '@angular/core';

// you'll simulate getting data from the server with the RxJS of() function.
import { Observable, of } from 'rxjs';

// Import hero class
import { Hero } from './hero';
// Import mock hero list data 
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // return the data 
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    // of(HEROES) returns an Observable<Hero[]> 
    // that emits a single value, the array of mock heroes.
    return of(HEROES);
  }
}
