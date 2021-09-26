import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { IAnimais } from '../animais.interface';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css']
})
export class ListaAnimaisComponent implements OnInit {
  animais!: IAnimais;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    })
  }

}
