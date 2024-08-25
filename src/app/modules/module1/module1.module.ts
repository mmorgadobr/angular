import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { Child1Component } from './child1/child1.component';


@NgModule({
  declarations: [
    Child1Component
  ],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
