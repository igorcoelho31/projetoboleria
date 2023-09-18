import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadreceitaPageRoutingModule } from './cadreceita-routing.module';

import { CadreceitaPage } from './cadreceita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadreceitaPageRoutingModule
  ],
  declarations: [CadreceitaPage]
})
export class CadreceitaPageModule {}
