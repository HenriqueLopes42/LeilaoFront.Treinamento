import { Component, OnInit } from '@angular/core';
import { Medico } from '../entities/medico';
import { MedicoService } from '../services/medico.service';
@Component({
  selector: 'app-medico-listar',
  templateUrl: './medico-listar.component.html',
  styleUrls: ['./medico-listar.component.css']
})
export class MedicoListarComponent implements OnInit {

  medicos: Medico[] = []
  constructor( private servicoMedico: MedicoService) { }

  ngOnInit(): void {
   this.servicoMedico.listar().subscribe(
     dados=> this.medicos = dados
   )

  }

}
