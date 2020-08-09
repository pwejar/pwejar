import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetQuatationPage } from './get-quatation.page';

const routes: Routes = [
  {
    path: '',
    component: GetQuatationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetQuatationPageRoutingModule {}
