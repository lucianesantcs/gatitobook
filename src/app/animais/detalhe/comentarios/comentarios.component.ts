import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { IComentarios } from './comentarios.interface';
import { ComentariosService } from './comentarios.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input() id!: number;

  comentarios$!: Observable<IComentarios>;
  form!: FormGroup;

  constructor(private comentarioService: ComentariosService, private formBuilder: FormBuilder) { }

  criarComentario() {
    const comentario = this.form.get('comentario')?.value ?? '';
    this.comentarios$ = this.comentarioService.criarComentario(this.id, comentario).pipe(
      switchMap(() => this.comentarioService.buscaComentario(this.id)),
      tap(() => {
        this.form.reset();
        alert('Comentário salvo!')
      })
    )
  }

  ngOnInit(): void {
    this.comentarios$ = this.comentarioService.buscaComentario(this.id);
    this.form = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300)]
    })
  }

}
