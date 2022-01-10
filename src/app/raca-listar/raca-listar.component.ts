import { Component, OnInit } from '@angular/core';
import { Raca } from '../entities/raca';
import { RacaService } from '../services/raca.service';

@Component({
  selector: 'app-raca-listar',
  templateUrl: './raca-listar.component.html',
  styleUrls: ['./raca-listar.component.css']
})
export class RacaListarComponent implements OnInit {

  racas: Raca[] = []
  constructor( private servicoRaca: RacaService) { }

  ngOnInit(): void {
    this.servicoRaca.listar().subscribe(
      dados=> this.racas = dados
    )
  }

}
