import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserregistreRoutingModule } from './userregistre-routing.module';
import { UserregistreComponent } from './userregistre/userregistre.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserregistreComponent
  ],
  imports: [
    CommonModule,
    UserregistreRoutingModule,
    FormsModule
  ]
})
export class UserregistreModule { }
