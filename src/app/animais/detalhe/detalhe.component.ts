import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAnimal } from '../animais.interface';
import { AnimaisService } from '../animais.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  animalId!: number;
  animal$!: Observable<IAnimal>;

  constructor(
    private animaisService: AnimaisService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.animalId = this.activatedRoute.snapshot.params.animalId;
    this.animal$ = this.animaisService.buscaPorId(this.animalId);
  }

  curtir() {
    this.animaisService.curtir(this.animalId).subscribe(curtida => {
      if(curtida) {
        this.animal$ = this.animaisService.buscaPorId(this.animalId);
      }
    })
  }

  excluir() {
    this.animaisService.excluiAnimal(this.animalId).subscribe(() => {
      this.router.navigate(['/animais/']);
    }, error => console.log(error))
  }

}
