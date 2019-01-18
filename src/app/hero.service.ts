import { Injectable } from '@angular/core';

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
  getHeroes(): Hero[] {
    return HEROES;
  }
}
