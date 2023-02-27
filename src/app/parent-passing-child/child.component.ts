import { Component, Input } from '@angular/core';
import { Toy } from './Toys';

@Component({
  selector: 'child-component',
  template: `<div> I am a child and I have recieved this toy: {{toyToChild.name}} </div>`
})
export class ChildComponent {

@Input() toyToChild!: Toy;

}
