import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './services/guard/auth.guard';

const routes: Routes = [{path:'register',loadChildren:()=>import('./userregistre/userregistre.module').then(m=>m.UserregistreModule)},
{path:'login',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)},
{path:'activate-account',loadChildren:()=>import('./activate-account/activate-account.module').then(m=>m.ActivateAccountModule)},
//{path:'liste-enchere',loadChildren:()=>import('./liste-enchere/liste-enchere-routing.module').then(m=>m.ListeEnchereRoutingModule)},
//{path:'ajout-enchere/:idEnchere',loadChildren:()=>import('./ajoutenchere/ajoutenchere.module').then(m=>m.AjoutenchereModule)},
{path:'',redirectTo:'dashboard', pathMatch:'full'},
{path:'',loadChildren:()=>import('./pages-user/pages-user.module').then(m=>m.PagesUserModule)},
{path:'',loadChildren:()=>import('./admin-pages/admin-pages.module').then(m=>m.AdminPagesModule)}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
