import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
