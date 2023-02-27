import { Component } from '@angular/core';

@Component({
  selector: 'app-first-directive',
  templateUrl: './first-directive.component.html',
  styleUrls: ['./first-directive.component.css']
})
export class FirstDirectiveComponent {
  color: string = '';
}
