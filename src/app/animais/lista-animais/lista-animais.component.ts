import { Component, OnInit } from '@angular/core';
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
  //animais$!: Observable<IAnimais>;
  animais!: IAnimais; //usa com forma antiga

  constructor(private usuarioService: UsuarioService, private animaisService: AnimaisService) { }

  ngOnInit(): void {
    //melhor forma: erro de rota e ao implementar guards
    // this.animais$ = this.usuarioService.retornaUsuario().pipe(
    //   switchMap(usuario => {
    //     const userName = usuario.name ?? '';
    //     return this.animaisService.listaDoUsuario(userName);
    //   })
    // );

    // forma antiga:
    this.usuarioService.retornaUsuario().subscribe(usuario => {
      const userName = usuario.name ?? '';
      if(userName) {
        this.animaisService.listaDoUsuario(userName).subscribe(animais => {
          this.animais = animais;
        })
      }
    })
  }

}
