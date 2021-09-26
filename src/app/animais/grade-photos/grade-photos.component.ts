import { Component, Input, OnInit } from '@angular/core';
import { IAnimais } from '../animais.interface';

@Component({
  selector: 'app-grade-photos',
  templateUrl: './grade-photos.component.html',
  styleUrls: ['./grade-photos.component.css']
})
export class GradePhotosComponent implements OnInit {

  @Input() animais!: IAnimais;

  constructor() { }

  ngOnInit(): void {
  }

}
