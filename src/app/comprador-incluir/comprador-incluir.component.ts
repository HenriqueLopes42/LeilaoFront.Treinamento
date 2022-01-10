import { Leilao } from '../entities/leilao';
import { LeilaoService } from '../services/leilao.service';
import { Comprador } from '../entities/comprador';
import { Mensagem } from '../entities/mensagem';
import { NgForm } from '@angular/forms';
import { CompradorService } from '../services/comprador.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comprador-incluir',
  templateUrl: './comprador-incluir.component.html',
  styleUrls: ['./comprador-incluir.component.css']
})

export class CompradorIncluirComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }
  leiloes: Leilao[] = []
  comprador: Comprador = {
    idComprador: 0,
    nome: '',
    cpf: '',
    dataNascimento: new Date,
    telefone: '',
    email: '',
    idLeilao: 0,
    ativo: true
  }
  constructor(private compradorService: CompradorService, private leilaoService: LeilaoService) { }

  ngOnInit(): void {
    this.leilaoService.listar().subscribe(
      dados => this.leiloes = dados
    )
  }

  incluir(frm: NgForm){

    this.compradorService.incluir(this.comprador).subscribe(
      dados=> {

        this.mensagem = dados
        alert(this.mensagem.mensagem)
      }
    );
  }
}


