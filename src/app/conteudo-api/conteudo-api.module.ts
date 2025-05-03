import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConteudoApiPageRoutingModule } from './conteudo-api-routing.module';

import { ConteudoApiPage } from './conteudo-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConteudoApiPageRoutingModule
  ],
  declarations: [ConteudoApiPage]
})
export class ConteudoApiPageModule {}
