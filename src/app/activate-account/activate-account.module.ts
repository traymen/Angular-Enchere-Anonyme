import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivateAccountRoutingModule } from './activate-account-routing.module';
import { ActivateAccountComponent } from './activate-account/activate-account.component';
import { FormsModule } from '@angular/forms';
import { CodeInputModule } from 'angular-code-input';


@NgModule({
  declarations: [
    ActivateAccountComponent
  ],
  imports: [
    CommonModule,
    ActivateAccountRoutingModule,
    FormsModule,
    CodeInputModule
    
  ]
})
export class ActivateAccountModule { }
