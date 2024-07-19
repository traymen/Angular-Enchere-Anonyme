import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesUserRoutingModule } from './pages-user-routing.module';
import { ParticipationuserComponent } from './participationuser/participationuser.component';
import { ListeEnchereUserComponent } from './liste-enchere-user/liste-enchere-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistoriqueUserComponent } from './historique-user/historique-user.component';
import { MesFavorisComponent } from './mes-favoris/mes-favoris.component';
import { UserComponent } from './user/user.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { HistoriqueReclamationComponent } from './historique-reclamation/historique-reclamation.component';


@NgModule({
  declarations: [
    ParticipationuserComponent,
    ListeEnchereUserComponent,
    HistoriqueUserComponent,
    MesFavorisComponent,
    UserComponent,
    ReclamationComponent,
    HistoriqueReclamationComponent
  ],
  imports: [
    CommonModule,
    PagesUserRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class PagesUserModule { }
