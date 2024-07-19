import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListeEnchereRoutingModule } from './liste-enchere-routing.module';
import { ListeEnchereComponent } from './liste-enchere/liste-enchere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListeEnchereComponent
  ],
  imports: [
    CommonModule,
    ListeEnchereRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule 
  ]
})
export class ListeEnchereModule { }
