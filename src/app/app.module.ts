import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

// NgModel lives here
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  // List of external modules the app needs 
  imports: [
    BrowserModule,
    FormsModule // Added module 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
