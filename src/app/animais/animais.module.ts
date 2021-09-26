import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { GradePhotosComponent } from './grade-photos/grade-photos.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ListaAnimaisComponent,
    AnimalComponent,
    GradePhotosComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule, 
    RouterModule
  ]
})
export class AnimaisModule { }
