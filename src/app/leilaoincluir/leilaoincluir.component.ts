import { Mensagem } from './../entities/mensagem';
import { Leilao } from './../entities/leilao';
import { LeilaoService } from './../services/leilao.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leilaoincluir',
  templateUrl: './leilaoincluir.component.html',
  styleUrls: ['./leilaoincluir.component.css']
})
export class LeilaoincluirComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }

  leilao: Leilao = {
    idLeilao: 0,
    nome: '',
    descricao: '',
    data: new Date(),
    ativo: true
  }
  constructor(private leilaoService: LeilaoService) { }

  ngOnInit(): void {
  }

  incluir( frm: NgForm){


    this.leilaoService.incluir(this.leilao).subscribe(

      dados => { this.mensagem = dados

        alert(this.mensagem.mensagem)
        this.mensagem.erros.forEach(obj => {
          alert(obj)
         });
      }

    )

  }

}
