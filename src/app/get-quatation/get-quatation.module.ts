import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetQuatationPageRoutingModule } from './get-quatation-routing.module';

import { GetQuatationPage } from './get-quatation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetQuatationPageRoutingModule
  ],
  declarations: [GetQuatationPage]
})
export class GetQuatationPageModule {}
