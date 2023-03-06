import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './first-directive/highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { FirstDirectiveComponent } from './first-directive/first-directive.component';
import { ParentPassingChildComponent } from './parent-passing-child/parent.component';
import { ChildComponent } from './parent-passing-child/child.component';
import { WrappedComponent } from './wrapped/wrapped.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import { HttpClientModule } from '@angular/common/http'
import { CallApiComponent } from './call-api/call-api.component';



@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    FirstDirectiveComponent,
    ParentPassingChildComponent,
    ChildComponent,
    WrappedComponent,
    HelloComponentComponent,
    CallApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [], // here inject all the services 
  bootstrap: [AppComponent]
})
export class AppModule { }
