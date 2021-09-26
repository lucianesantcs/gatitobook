import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, mapTo } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TokenService } from '../autenticacao/token.service';
import { IAnimais, IAnimal } from './animais.interface';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root'
})
export class AnimaisService {

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  listaDoUsuario(nomeUsuario: string): Observable<IAnimais> {
    return this.httpClient.get<IAnimais>(`${API}/${nomeUsuario}/photos`);
  }

  buscaPorId(id: number): Observable<IAnimal> {
    return this.httpClient.get<IAnimal>(`${API}/photos/${id}`);
  }

  excluiAnimal(id: number): Observable<IAnimal> {
    return this.httpClient.delete<IAnimal>(`${API}/photos/${id}`);
  }

  curtir(id: number): Observable<boolean> {
    return this.httpClient.post(`${API}/photos/${id}/like`, {}, {
      observe: 'response'
    }).pipe(mapTo(true), catchError(error => {
      return error.status === NOT_MODIFIED ? of(false) : throwError(error);
    }));
  }
}
