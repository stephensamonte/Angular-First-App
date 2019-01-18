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
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // constructor() { }
  // a parameter that declares a private messageService property. 
  // Angular will inject the singleton MessageService into that 
  // property when it creates the HeroService.
  constructor(private messageService: MessageService) { }

  // return the data 
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');

    // of(HEROES) returns an Observable<Hero[]> 
    // that emits a single value, the array of mock heroes.
    return of(HEROES);
  }
}
