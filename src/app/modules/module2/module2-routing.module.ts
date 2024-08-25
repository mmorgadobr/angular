import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  { path: 'child2', component: Child2Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module2RoutingModule { }
