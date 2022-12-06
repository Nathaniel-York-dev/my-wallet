import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthorizedGuard} from "./lib/guards/authorized.guard";

const routes: Routes = [{
  path: '',
  redirectTo: 'sign',
  pathMatch: 'full'
},{
  path: 'sign',
  canLoad: [AuthorizedGuard],
  loadChildren: () => import('./modules/sign/sign.module').then(m => m.SignModule)
},{
  path: 'dashboard',
  canLoad: [AuthorizedGuard],
  loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
