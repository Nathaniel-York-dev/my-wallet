import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './components/summary/summary.component';
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {CoreModule} from "../core/core.module";



@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule { }
