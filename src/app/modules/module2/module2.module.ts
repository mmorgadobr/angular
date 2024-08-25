import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module2RoutingModule } from './module2-routing.module';
import { Child2Component } from './child2/child2.component';


@NgModule({
  declarations: [
    Child2Component
  ],
  imports: [
    CommonModule,
    Module2RoutingModule
  ]
})
export class Module2Module { }
