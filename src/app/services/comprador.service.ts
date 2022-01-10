import { Mensagem } from './../entities/mensagem';
import { Comprador } from './../entities/comprador';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompradorService {

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<Comprador[]>("http://localhost:8080/comprador");
  }

  buscar( id: string): Observable<Comprador>{
    return this.http.get<Comprador>("http://localhost:8080/comprador" + id)
  }

  incluir( comprador: Comprador): Observable<Mensagem>{
    return this.http.post<Mensagem>("http://localhost:8080/comprador", comprador);
  }

  alterar(comprador: Comprador): Observable<Mensagem>{
    return this.http.put<Mensagem>("http://localhost:8080/comprador", comprador);
  }

  excluir(comprador: Comprador): Observable<Mensagem>{
    return this.http.delete<Mensagem>("http://localhost:8080/comprador" + comprador.idComprador);
  }
}

