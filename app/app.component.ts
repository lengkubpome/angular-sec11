import { Component } from '@angular/core';
import { NavBarComponent } from './navbar/navbar.Component';

@Component({
  selector: 'my-app',
  template: `
    <navbar></navbar>
    <div></div>
   
  `,
  directives:[NavBarComponent]
})
export class AppComponent { 

}