import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstDirectiveComponent } from './first-directive/first-directive.component';
import { HelloComponentComponent } from './hello-component/hello-component.component';
import {ParentPassingChildComponent} from './parent-passing-child/parent.component'
import { CallApiComponent } from './call-api/call-api.component'
const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'first-attribute-directive', component: FirstDirectiveComponent },
  { path: 'parent-passing-child', component: ParentPassingChildComponent },
  { path: 'sigle-slot-content', component: HelloComponentComponent },
  { path: 'call-api', component: CallApiComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
