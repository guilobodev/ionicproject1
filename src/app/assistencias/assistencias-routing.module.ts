import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssistenciasPage } from './assistencias.page';

const routes: Routes = [
  {
    path: '',
    component: AssistenciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssistenciasPageRoutingModule {}
