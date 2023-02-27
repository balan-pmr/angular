import { Component } from '@angular/core';
import { TOYS } from './Toys';

@Component({
  selector: 'parent-component',
  template:`<h2>I am giving to my son {{toys.length}} toys </h2> 
  <child-component 
  *ngFor="let toy of toys"
      [toyToChild]="toy"
  > 
  </child-component>`
})
export class ParentPassingChildComponent {
  toys = TOYS;
}
