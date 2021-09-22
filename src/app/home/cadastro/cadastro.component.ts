import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICadastroUsuario } from './cadastro-usuario.interface';
import { CadastroService } from './cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form!: FormGroup; // "!" tira erro typescript de instancia

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService
  ) { }

  cadastrar() {
    const novoUsuario = this.form.getRawValue() as ICadastroUsuario;
    console.log(novoUsuario)
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [''],
      fullName: [''],
      userName: [''],
      password: ['']
    })
  }

}
