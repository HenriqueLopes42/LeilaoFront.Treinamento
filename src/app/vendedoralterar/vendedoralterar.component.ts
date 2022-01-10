import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../entities/mensagem';
import { Vendedor } from '../entities/vendedor';
import { VendedorService } from '../services/vendedor.service';

@Component({
  selector: 'app-vendedoralterar',
  templateUrl: './vendedoralterar.component.html',
  styleUrls: ['./vendedoralterar.component.css']
})
export class VendedoralterarComponent implements OnInit {
  mensagem: Mensagem = {
    mensagem: '',
    erros: []
  }
  
  vendedores: Vendedor= {
    idVendedor: 0,
    nome: '',
    cpf: 0,
    dataNascimento: new Date(),
    telefone: 0,
    email: '',
    ativo: false
  }
  

  constructor(private vendedorService: VendedorService, private route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {

    this.vendedorService.listar().subscribe(
      dados => this.vendedores = dados
    )

    let id = this.route.snapshot.paramMap.get("id");

    this.vendedorService.buscar(id+"").subscribe(
      dados => this.vendedores = dados
    )

  }

  alterar( frm: NgForm){
    this.vendedorService.alterar(this.vendedores).subscribe(
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