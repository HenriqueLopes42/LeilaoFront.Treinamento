import { Leilao } from './../entities/leilao';
import { MedicoService } from './../services/medico.service';
import { Medico } from './../entities/medico';
import { CompradorService } from './../services/comprador.service';
import { Comprador } from './../entities/comprador';
import { VendedorService } from './../services/vendedor.service';
import { Vendedor } from './../entities/vendedor';
import { Mensagem } from './../entities/mensagem';
import { AnimalService } from './../services/animal.service';
import { RacaService } from './../services/raca.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Animal } from '../entities/animal';
import { Raca } from '../entities/raca';
import { LeilaoService } from '../services/leilao.service';

@Component({
  selector: 'app-animalincluir',
  templateUrl: './animalincluir.component.html',
  styleUrls: ['./animalincluir.component.css']
})
export class AnimalincluirComponent implements OnInit {
  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }
  racas: Raca[] = []
  vendedores: Vendedor[] = []
  compradores: Comprador[] = []
  medicos: Medico[] = []
  leiloes: Leilao[] = []

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
    ativo: true
  }
  constructor(private racaService: RacaService,private leilaoService: LeilaoService,private medicoService: MedicoService,private compradorService: CompradorService,private vendedorService: VendedorService, private animalService: AnimalService) { }

  ngOnInit(): void {

    this.racaService.listar().subscribe(
      dados => this.racas = dados
    )

    this.vendedorService.listar().subscribe(
      dados => this.vendedores = dados
    )

    this.compradorService.listar().subscribe(
      dados => this.compradores = dados
    )

    this.medicoService.listar().subscribe(
      dados => this.medicos = dados
    )

    this.leilaoService.listar().subscribe(
      dados => this.leiloes = dados
    )

  }

  incluir( frm: NgForm){


    this.animalService.incluir(this.animal).subscribe(

      dados => { this.mensagem = dados
        console.log(this.animal)
        alert(this.mensagem.mensagem)
        this.mensagem.erros.forEach(obj => {
          alert(obj)
         });
      }

    )

  }


}
