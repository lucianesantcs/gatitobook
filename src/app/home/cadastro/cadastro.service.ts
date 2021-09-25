import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICadastroUsuario } from './cadastro-usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private httpClient: HttpClient) { }

  cadastrarNovoUsuario(novoUsuario: ICadastroUsuario) {
    return this.httpClient.post('http://localhost:3000/user/signup', novoUsuario);
  }

  verificaUsuario(nomeUsuario: string) {
    return this.httpClient.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }
}
