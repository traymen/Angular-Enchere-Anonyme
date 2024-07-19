import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeEnchereComponent } from './liste-enchere/liste-enchere.component';

const routes: Routes = [{
  path:'',component:ListeEnchereComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListeEnchereRoutingModule { }
