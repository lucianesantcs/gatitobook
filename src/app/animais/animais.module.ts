import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { GradePhotosComponent } from './grade-photos/grade-photos.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { ComentariosComponent } from './detalhe/comentarios/comentarios.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ListaAnimaisComponent,
    AnimalComponent,
    GradePhotosComponent,
    DetalheComponent,
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule,
    SharedModule
  ]
})
export class AnimaisModule { }
