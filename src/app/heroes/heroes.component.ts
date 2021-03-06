import { Component, OnInit } from '@angular/core';

// importing Hero type 
import { Hero } from '../hero';

// importing mockHeros
// import { HEROES } from '../mock-heroes';

// to retrieve the mockHeroes via a service 
import { HeroService } from '../hero.service';

/** @Component is a decorator function that specifies the Angular metadata for the component. */ 
@Component({
  // selector— the component's CSS element selector
  selector: 'app-heroes',
  // templateUrl— the location of the component's template file.
  templateUrl: './heroes.component.html',
  // styleUrls— the location of the component's private CSS styles.
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // hero = 'Windstorm';

  // Object of type Hero named hero
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  // component property to expose MockHEROES array for binding data
  // heroes = HEROES;

  // heroes as a simple declaration of an array of hero 
  heroes: Hero[];

  // create selected hero property 
  // not needed with routing
  // selectedHero: Hero;

  // constructor() { }
  /**
   * Add private hero service to contructor. 
   * The parameter simultaneously defines a private 
   * heroService property and identifies it as a 
   * HeroService injection site.
   * @param heroService 
   */
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // call function to get heros from the service
    this.getHeroes();
  }

  // Function called when a hero in the list is selected
  // Not needed with routing
  // onSelect(hero: Hero): void {
  //   // Set selected hero
  //   this.selectedHero = hero;
  // }

  // retrieve the heroes from the service.
  // getHeroes(): void {
  //   // The HeroService.getHeroes() method has a synchronous signature, 
  //   // which implies that the HeroService can fetch heroes synchronously. 
  //   // The HeroesComponent consumes the getHeroes() result as if heroes 
  //   // could be fetched synchronously.

  //   // This will not work in a real app because the service currently 
  //   // returns mock heroes. But soon the app will fetch heroes from a 
  //   // remote server, which is an inherently asynchronous operation.
  //   this.heroes = this.heroService.getHeroes();
  // }
  getHeroes(): void {
    // The previous version assigns an array of heroes to the 
    // component's heroes property. The assignment occurs 
    // synchronously, as if the server could return heroes instantly 
    // or the browser could freeze the UI while it waited for the 
    // server's response.

    // The new version waits for the Observable to emit the array of 
    // heroes— which could happen now or several minutes from now. 
    // Then subscribe passes the emitted array to the callback, 
    // which sets the component's heroes property.

    // Now it returns an Observable<Hero[]>.
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  // Add a hero 
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  // Delete a hero
  // Although the component delegates hero deletion to the HeroService, 
  // it remains responsible for updating its own list of heroes. 
  // The component's delete() method immediately removes the hero-to-delete 
  // from that list, anticipating that the HeroService will succeed 
  // on the server.
  
  // There's really nothing for the component to do with the Observable 
  // returned by heroService.delete(). It must subscribe anyway.
  
  // If you neglect to subscribe(), the service will not send the delete 
  // request to the server! As a rule, an Observable does nothing until 
  // something subscribes!
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}


