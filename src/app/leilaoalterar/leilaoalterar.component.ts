import { LeilaoService } from './../services/leilao.service';
import { Component, OnInit } from '@angular/core';
import { Leilao } from '../entities/leilao';
import { Mensagem } from '../entities/mensagem';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-leilaoalterar',
  templateUrl: './leilaoalterar.component.html',
  styleUrls: ['./leilaoalterar.component.css']
})
export class LeilaoalterarComponent implements OnInit {

  leiloes : Leilao[] = []
  leilaoService: any;
  constructor(private servicoLeilao : LeilaoService, private route: ActivatedRoute,
    private router: Router) { }

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
  ngOnInit(): void {
    this.servicoLeilao.listar().subscribe(
      dados => this.servicoLeilao = dados
    )
  }
  alterar( frm: NgForm){
    this.leilaoService.alterar(this.leilao).subscribe(
      alert(this.mensagem.mensagem),
      console.log(this.mensagem),
      /*if (this.mensagem.erros !) {
        this.mensagem.erros.forEach( (obj) => { alert(obj) })
      } else {
        this.router.navigateByUrl("animal")
      }*/
    )
  }
}
