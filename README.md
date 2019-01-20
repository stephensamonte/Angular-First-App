
# AngularFirstApp
This is my first Angular Website App Project which I use as a quick reference when developing Angular websites. 

This is the Angular [Tour of Heroes Tutorial](https://angular.io/tutorial)

"The Tour of Heroes tutorial covers the fundamentals of Angular.In this tutorial you will build an app that helps a staffing agency manage its stable of heroes."

# Environment: 
- This is an Angular app. Follow this setup: [Angular Quick Start](https://angular.io/guide/quickstart)

# Notes: 
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.
- Started as part of the quick start tutorial: [Angular QuickStart](https://angular.io/guide/quickstart)
- Project is now my version of the [Tour of Heroes Tutorial](https://angular.io/tutorial)
- This uses the [In-Memory Web API module](https://github.com/angular/in-memory-web-api) to mimic a remote server. 

# Journal: 
- 2019.01.12 Created initial project and Updated README.md
- 2019.01.13 Added heroes component with terminal command: `ng generate component heroes`
- 2019.01.16 Display a list 
- 2019.01.17 Created master/detail component
- 2019.01.18 Created services to provide the data to mimic server request and added message item component with a service. [Showcase](https://www.youtube.com/watch?v=aQ7NIlKSCIw&feature=youtu.be)
- 2019.01.19 Added Routing Module [Showcase](https://www.youtube.com/watch?v=sL8LLgAuqms)
- 2019.01.19 Added Dashboard and routing to detail and heroes list. [Showcase](https://www.youtube.com/watch?v=InQdA77K6fE&feature=youtu.be)
- 2019.01.19 [pt6 Simulate a data server](https://angular.io/tutorial/toh-pt6)
- 2019.01.20 Added ability to save, add, and delete heroes [Showcase](https://www.youtube.com/watch?v=iAPn-4Vredw&feature=youtu.be)
- 2019.01.20 Added Search box in Master View & Update CSS [Showcase](https://www.youtube.com/watch?v=uI6yrFRkqz0&feature=youtu.be)

## Creaate a new hero component
Use the Angular CLI to generate a new component named hero-detail.
`ng generate component hero-detail`

## Create a new service 
Services are a great way to share information among classes that don't know each other. You'll create a MessageService and inject it in two places:
1) in HeroService which uses the service to send a message.
2) in MessagesComponent which displays that message.
`ng generate service hero`

## Create Routing module
In Angular, the best practice is to load and configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule.
--flat puts the file in src/app instead of its own folder.
--module=app tells the CLI to register it in the imports array of the AppModule.
`ng generate module app-routing --flat --module=app`

## In-Memory Web Api Module 
This uses the [In-Memory Web API module](https://github.com/angular/in-memory-web-api) to mimic a remote server. Use the following command to install the package from npm (it has nothing to do with Angular): 
`npm install angular-in-memory-web-api --save`

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help
To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## This content was from an Angular tutorial and I added comments to better understand Angular. 
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license

