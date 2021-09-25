import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICadastroUsuario } from './cadastro-usuario.interface';
import { CadastroService } from './cadastro.service';
import { minusculoValidator } from './minusculo.validator';
import { usuarioSenhaValidator } from './usuario-senha.validator';
import { VerificaUsuarioService } from './verifica-usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  form!: FormGroup; // "!" tira erro typescript de instancia

  constructor(
    private formBuilder: FormBuilder,
    private cadastroService: CadastroService,
    private verificaUsuarioService: VerificaUsuarioService,
    private router: Router
  ) { }

  cadastrar() {
    if(this.form.valid) {
      const novoUsuario = this.form.getRawValue() as ICadastroUsuario;
      this.cadastroService.cadastrarNovoUsuario(novoUsuario).subscribe(() => {
        this.router.navigate(['']);
      }), (error: any) => console.log(error);
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: ['', [Validators.required, Validators.minLength(4)]],
      userName: ['', [minusculoValidator], [this.verificaUsuarioService.usuarioExiste()]],
      password: [''],
      },
      {
        validators: [usuarioSenhaValidator],
      }
    );
  }

}
