import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConteudoApiPage } from './conteudo-api.page';

const routes: Routes = [
  {
    path: '',
    component: ConteudoApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConteudoApiPageRoutingModule {}
