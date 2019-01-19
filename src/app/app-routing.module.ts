// From: https://angular.io/tutorial/toh-pt5

import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Heroes component
import { HeroesComponent }      from './heroes/heroes.component';

// Dasboard component
import { DashboardComponent }   from './dashboard/dashboard.component';

// Hero detail component
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

// Routes tell the router which view to display when a user clicks a link or pastes a URL into the browser address bar.
// A typical Angular Route has two properties:
// path: a string that matches the URL in the browser address bar.
// component: the component that the router should create when navigating to this route.
const routes: Routes = [

  // default route to navigate to dashboard automatically
  // This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

  { path: 'heroes', component: HeroesComponent }, 
  { path: 'dashboard', component: DashboardComponent },
  
  // The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  { path: 'detail/:id', component: HeroDetailComponent },
  
];

@NgModule({

  // You first must initialize the router and start it listening for browser location changes.
  // configure it with the routes
  // The method is called forRoot() because you configure the router 
  // at the application's root level. The forRoot() method supplies the 
  // service providers and directives needed for routing, and performs 
  // the initial navigation based on the current browser URL.
  imports: [ RouterModule.forRoot(routes) ],

  // Exporting RouterModule makes router directives available for 
  // use in the AppModule components that will need them.
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
