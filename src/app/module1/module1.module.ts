import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';



@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [
    CommonModule
  ]
})
export class Module1Module { }
