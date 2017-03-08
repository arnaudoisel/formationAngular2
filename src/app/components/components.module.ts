import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ToyComponent } from './toy/toy.component';

const components = [ ToyComponent ];

@NgModule({
  declarations: [ ...components ],
  imports: [ BrowserModule ],
  exports: [ ...components ]
})
export class ComponentsModule { }
