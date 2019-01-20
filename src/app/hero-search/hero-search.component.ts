
// Remember that the component class does not subscribe to the 
// heroes$ observable. That's the job of the AsyncPipe in the template.

import { Component, OnInit } from '@angular/core';
 
import { Observable, Subject } from 'rxjs';
 
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';
 
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
 
@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;

  // The searchTerms property is declared as an RxJS Subject.
  // A Subject is both a source of observable values and an 
  // Observable itself. You can subscribe to a Subject as you would 
  // any Observable.
  private searchTerms = new Subject<string>();
 
  constructor(private heroService: HeroService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {

    // You can also push values into that Observable by calling its 
    // next(value) method.
    this.searchTerms.next(term);
  }
 
  
  ngOnInit(): void {

    /**
     * Passing a new search term directly to the searchHeroes() after every 
     * user keystroke would create an excessive amount of HTTP requests, 
     * taxing server resources and burning through the cellular network data plan.
     * 
     * Instead, the ngOnInit() method pipes the searchTerms observable 
     * through a sequence of RxJS operators that reduce the number of calls 
     * to the searchHeroes(), ultimately returning an observable of timely 
     * hero search results (each a Hero[]).
   */

    // Notice the declaration of heroes$ as an Observable
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      // You'll never make requests more frequently than 300ms.
      debounceTime(300),
 
      // ignore new term if same as previous term
      // distinctUntilChanged() ensures that a request is 
      // sent only if the filter text changed.
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes

      // switchMap() calls the search service for each search term that 
      // makes it through debounce and distinctUntilChanged. It cancels 
      // and discards previous search observables, returning only the 
      // latest search service observable.

      // With the switchMap operator, every qualifying key event can 
      // trigger an HttpClient.get() method call. Even with a 
      // 300ms pause between requests, you could have multiple HTTP 
      // requests in flight and they may not return in the order sent.

      // switchMap() preserves the original request order while returning 
      // only the observable from the most recent HTTP method call. 
      // Results from prior calls are canceled and discarded.
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}