import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPagesRoutingModule } from './admin-pages-routing.module';
import { ListeEnchereAdminComponent } from './liste-enchere-admin/liste-enchere-admin.component';
import { ManageEnchereComponent } from './manage-enchere/manage-enchere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListeParticipantComponent } from './liste-participant/liste-participant.component';
import { EnchereTerminerComponent } from './enchere-terminer/enchere-terminer.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { MainadminComponent } from './mainadmin/mainadmin.component';


@NgModule({
  declarations: [
    ListeEnchereAdminComponent,
    ManageEnchereComponent,
    ListeParticipantComponent,
    EnchereTerminerComponent,
    ReclamationComponent,
    MainadminComponent
  ],
  imports: [
    CommonModule,
    AdminPagesRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class AdminPagesModule { }
