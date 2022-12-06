import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SummaryComponent} from "./components/summary/summary.component";
import {AccountInfoResolver} from "./lib/resolvers/account-info.resolver";
const routes: Routes = [{
  path: '',
  redirectTo: 'summary',
  pathMatch: 'full'
},{
  path: 'summary',
  resolve: {
    accountInfo: AccountInfoResolver
  },
  component: SummaryComponent,
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
