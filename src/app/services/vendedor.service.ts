import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendedor } from '../entities/vendedor';
import { Observable } from 'rxjs';
import { Mensagem } from '../entities/mensagem';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  constructor(private http: HttpClient) { }
  

  listar(): Observable<any>{
    return this.http.get<Vendedor[]>("http://localhost:8080/vendedor");
  }

  buscar( id: string ): Observable<Vendedor>{
    return this.http.get<Vendedor>("http://localhost:8080/vendedor/" + id)
  }

  incluir( vendedor: Vendedor ): Observable<Mensagem>{
    return this.http.post<Mensagem>("http://localhost:8080/vendedor",vendedor);
  }

  alterar( vendedor: Vendedor): Observable<Mensagem>{
    return this.http.put<Mensagem>("http://localhost:8080/vendedor", vendedor);
  }

  excluir( vendedor: Vendedor): Observable<Mensagem>{
    return this.http.delete<Mensagem>("http://localhost:8080/vendedor/"+ vendedor.idVendedor);
  }
}
