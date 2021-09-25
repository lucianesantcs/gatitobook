import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { first, map, switchMap } from 'rxjs/operators';
import { CadastroService } from './cadastro.service';

@Injectable({
  providedIn: 'root',
})
export class VerificaUsuarioService {
  constructor(private cadastroService: CadastroService) {}

  usuarioExiste() {
    return (control: AbstractControl) => {
      return control.valueChanges.pipe(
        switchMap((nomeUsuario) =>
          this.cadastroService.verificaUsuario(nomeUsuario)
        ),
        map((usuarioExiste) =>
          usuarioExiste ? { usuarioExistente: true } : null
        ),
        first()
      );
    };
  }
}
