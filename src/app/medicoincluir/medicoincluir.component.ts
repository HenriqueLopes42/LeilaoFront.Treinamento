import { Mensagem } from './../entities/mensagem';
import { NgForm } from '@angular/forms';
import { Medico } from './../entities/medico';
import { MedicoService } from './../services/medico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicoincluir',
  templateUrl: './medicoincluir.component.html',
  styleUrls: ['./medicoincluir.component.css']
})
export class MedicoincluirComponent implements OnInit {

  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }

  medico: Medico = {
    idMedico: 0,
    nome: '',
    crmv: 0,
    dataNascimento: new Date(),
    telefone: '',
    email: '',
    ativo: true
  }

  constructor(private medicoService: MedicoService) { }

  ngOnInit(): void {
  }

  incluir( frm: NgForm){


    this.medicoService.incluir(this.medico).subscribe(
      dados => { this.mensagem = dados

        alert(this.mensagem.mensagem)
        this.mensagem.erros.forEach(obj => {
          alert(obj)
         });
      }
    )

  }

}
