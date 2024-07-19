import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageEnchereComponent } from './manage-enchere/manage-enchere.component';
import { ListeEnchereAdminComponent } from './liste-enchere-admin/liste-enchere-admin.component';
import { ListeParticipantComponent } from './liste-participant/liste-participant.component';
import { EnchereTerminerComponent } from './enchere-terminer/enchere-terminer.component';

const routes: Routes = [{
  path: 'manage-enchere-admin',
  component: ManageEnchereComponent
},
{
  path: 'list-enchere-admin',
  component: ListeEnchereAdminComponent
},
{
  path: 'list-participant/:idEnchere',
  component: ListeParticipantComponent
},
{
  path: 'list-encheres-terminer',
  component: EnchereTerminerComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPagesRoutingModule { }
