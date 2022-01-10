import { Component, OnInit } from '@angular/core';
import { Animal } from '../entities/animal';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animal-listar',
  templateUrl: './animal-listar.component.html',
  styleUrls: ['./animal-listar.component.css']
})
export class AnimalListarComponent implements OnInit {

  animais: Animal[] = []
  constructor( private servicoAnimal: AnimalService) { }

  ngOnInit(): void {
    this.servicoAnimal.listar().subscribe(
      dados=> this.animais = dados
    )

  }

}
