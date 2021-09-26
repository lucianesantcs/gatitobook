import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalheComponent } from './detalhe/detalhe.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { ListaAnimaisResolver } from './lista-animais/lista-animais.resolver';

const routes: Routes = [
  {
    path: '',
    component: ListaAnimaisComponent,
    resolve: {
      animais: ListaAnimaisResolver
    }
  },
  {
    path: ':animalId',
    component: DetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimaisRoutingModule { }
