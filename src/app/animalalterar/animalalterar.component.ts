import { NgForm } from '@angular/forms';
import { AnimalService } from './../services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from '../entities/animal';
import { Mensagem } from '../entities/mensagem';
import { Raca } from '../entities/raca';
import { RacaService } from '../services/raca.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-animalalterar',
  templateUrl: './animalalterar.component.html',
  styleUrls: ['./animalalterar.component.css']
})
export class AnimalalterarComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }
  racas: Raca[] = []

  animal: Animal = {
    idAnimal: 0,
    nome: '',
    registro: '',
    preco: 0,
    idRaca: 0,
    idVendedor: 0,
    idComprador: 0,
    idMedico: 0,
    pesoArroba: 0,
    idade: 0,
    idLeilao: 0,
    ativo: false
  }

  constructor(private animalService: AnimalService, private racaService: RacaService, private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {

    this.racaService.listar().subscribe(
      dados => this.racas = dados
    )

    let id = this.route.snapshot.paramMap.get("id");

    this.animalService.buscar(id+"").subscribe(
      dados => this.animal = dados
    )

  }

  alterar( frm: NgForm){
    this.animalService.alterar(this.animal).subscribe(
      dados => { this.mensagem = dados
        alert(this.mensagem.mensagem)
        console.log(this.mensagem)
        if (this.mensagem.erros != null){
          this.mensagem.erros.forEach( (obj) => { alert(obj) })
        } else {
          this.router.navigateByUrl("animal")
        }
      }
    )
  }
  
}
