import { Component, OnInit } from '@angular/core';
import { Leilao } from '../entities/leilao';
import { LeilaoService } from '../services/leilao.service';

@Component({
  selector: 'app-leilao-listar',
  templateUrl: './leilao-listar.component.html',
  styleUrls: ['./leilao-listar.component.css']
})
export class LeilaoListarComponent implements OnInit {

  leiloes: Leilao[] = []
  constructor( private servicoLeilao: LeilaoService) { }

  ngOnInit(): void {
    this.servicoLeilao.listar().subscribe( 
      dados=> this.leiloes = dados
    )

  }
}
