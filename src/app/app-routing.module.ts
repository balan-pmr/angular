import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstDirectiveComponent } from './first-directive/first-directive.component';
import {ParentPassingChildComponent} from './parent-passing-child/parent.component'

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'first-attribute-directive', component: FirstDirectiveComponent },
  { path: 'parent-passing-child', component: ParentPassingChildComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
