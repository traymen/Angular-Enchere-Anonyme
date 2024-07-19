import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParticipationuserComponent } from './participationuser/participationuser.component';
import { ListeEnchereUserComponent } from './liste-enchere-user/liste-enchere-user.component';
import { HistoriqueUserComponent } from './historique-user/historique-user.component';
import { MesFavorisComponent } from './mes-favoris/mes-favoris.component';
import { UserComponent } from './user/user.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { HistoriqueReclamationComponent } from './historique-reclamation/historique-reclamation.component';

const routes: Routes = [{
  path: 'user-participate/:idEnchere',
  component: ParticipationuserComponent
},
{
  path: 'list-enchere-user',
  component: ListeEnchereUserComponent
},
{
  path: 'history-user',
  component: HistoriqueUserComponent
},
{
  path: 'favoris',
  component: MesFavorisComponent
},
{
  path: 'reclamation',
  component: ReclamationComponent
},
{
  path: 'historiquereclamation',
  component: HistoriqueReclamationComponent
}];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesUserRoutingModule { }
