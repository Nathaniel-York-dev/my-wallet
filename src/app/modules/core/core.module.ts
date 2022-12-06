import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CardMaskPipe } from './lib/pipes/card-mask.pipe';



@NgModule({
  declarations: [
    CardComponent,
    NavigationBarComponent,
    LoaderComponent,
    CardMaskPipe,
  ],
  exports: [
    CardComponent,
    NavigationBarComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
