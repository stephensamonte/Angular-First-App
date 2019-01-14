import { Component, OnInit } from '@angular/core';

// importing Hero type 
import { Hero } from '../hero';

// importing mockHeros
import { HEROES } from '../mock-heroes';

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
  heroes = HEROES;

  // create selected hero property 
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  // Function called when a hero in the list is selected
  onSelect(hero: Hero): void {
    // Set selected hero
    this.selectedHero = hero;
  }

}


