import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistenciasPageRoutingModule } from './assistencias-routing.module';

import { AssistenciasPage } from './assistencias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistenciasPageRoutingModule
  ],
  declarations: [AssistenciasPage]
})
export class AssistenciasPageModule {}
