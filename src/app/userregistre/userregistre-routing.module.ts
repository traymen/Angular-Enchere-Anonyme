import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserregistreComponent } from './userregistre/userregistre.component';

const routes: Routes = [{
  path:'',component:UserregistreComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserregistreRoutingModule { }
