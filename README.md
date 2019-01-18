
# AngularFirstApp
This is my first Angular Website App Project. 


# Notes: 
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.
- Started as part of the quick start tutorial: [Angular QuickStart](https://angular.io/guide/quickstart)
- Project is now my version of the [Tour of Heros Tutorial](https://angular.io/tutorial)

# Journal: 
- 2019.01.12 Created initial project and Updated README.md
- 2019.01.13 Added heroes component with terminal command: '$ ng generate component heroes'

## Creaate a new hero component
Use the Angular CLI to generate a new component named hero-detail.
`ng generate component hero-detail`

## Create a new service 
Services are a great way to share information among classes that don't know each other. You'll create a MessageService and inject it in two places:
1) in HeroService which uses the service to send a message.
2) in MessagesComponent which displays that message.
`ng generate service hero`

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
