import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Mensagem } from '../entities/mensagem';
import { Raca } from '../entities/raca';
import { RacaService } from '../services/raca.service';

@Component({
  selector: 'app-raca-incluir',
  templateUrl: './raca-incluir.component.html',
  styleUrls: ['./raca-incluir.component.css']
})
export class RacaIncluirComponent implements OnInit {
  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }
  raca: Raca = {
    idRaca: 0,
    nome: '',
    descricao: '',
    ativo: true
  }
  constructor(private racaService: RacaService) { }

  ngOnInit(): void {}

  incluir( frm: NgForm){

  
    this.racaService.incluir(this.raca).subscribe(

      dados => { this.mensagem = dados

        alert(this.mensagem.mensagem)
        this.mensagem.erros.forEach(obj => {
          alert(obj)
         });
      }

    )
    
  }

}

