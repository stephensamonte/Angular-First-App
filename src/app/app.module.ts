import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
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
