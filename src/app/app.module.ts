import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './first-directive/highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { FirstDirectiveComponent } from './first-directive/first-directive.component';
import { ParentPassingChildComponent } from './parent-passing-child/parent.component';
import { ChildComponent } from './parent-passing-child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    FirstDirectiveComponent,
    ParentPassingChildComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // here inject all the services 
  bootstrap: [AppComponent]
})
export class AppModule { }
