import { Component } from '@angular/core';
import { Toy, TOYS } from './Toys';

@Component({
  selector: 'parent-component',
  template:`<h2>I am giving to my son {{toys.length}} toys </h2> 
  <child-component 
  *ngFor="let toy of toys"
      [toyToChild]="toy"
  > 
  </child-component>
  <br>
  <div>
  <p>Give other toy: </p>
  <input (keyup)="onKey($event)">
  <button type="button" (click)="addNewToy()">Add a new Toy </button>
  </div>
  `
})
export class ParentPassingChildComponent {
  toys = TOYS;
  newToy:Toy = {name:''}

  addNewToy(){
    let addToy: Toy = JSON.parse(JSON.stringify(this.newToy));
    this.toys.push(addToy)
  }

  onKey(event: any) { // without type info
    this.newToy.name = event.target.value ;
  }

}
