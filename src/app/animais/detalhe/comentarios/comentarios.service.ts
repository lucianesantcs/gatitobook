import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IComentario, IComentarios } from './comentarios.interface';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private httpClient: HttpClient) { }

  buscaComentario(id: number): Observable<IComentarios> {
    return this.httpClient.get<IComentarios>(`${API}/photos/${id}/comments`);
  }

  criarComentario(id: number, commentText: string): Observable<IComentario> {
    return this.httpClient.post<IComentario>(`${API}/photos/${id}/comments`, { 
      commentText
    });
  }
}
