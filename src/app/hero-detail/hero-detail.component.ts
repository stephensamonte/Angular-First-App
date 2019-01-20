// import { Component, OnInit } from '@angular/core';

import { Component, OnInit, Input } from '@angular/core';

import { Hero } from '../hero';

// To get hero id from route. 
// The ActivatedRoute holds information about the route to this instance of the HeroDetailComponent. 
import { ActivatedRoute } from '@angular/router';
// The HeroService gets hero data from the remote server 
// and this component will use it to get the hero-to-display.
import { HeroService }  from '../hero.service';

// The location is an Angular service for interacting with the browser. 
// Used to navigate back to the view that navigated here.
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  /**
   * The hero property must be an Input property, 
   * annotated with the @Input() decorator, because 
   * the external HeroesComponent will bind to it like this.
   * You used the @Input decorator to make the hero property 
   * available for binding by the external HeroesComponent.
   */
  @Input() hero: Hero;

  // Inject the ActivatedRoute, HeroService, and Location services 
  // into the constructor, saving their values in private fields:
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    // Get the hero id from the route
    const id = +this.route.snapshot.paramMap.get('id');
    // retrieve the hero data by id
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  // back button action which returs to the previous page
  goBack(): void {
    this.location.back();
  }

  // Save the name change to the database
  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
