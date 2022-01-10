import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Leilao } from '../entities/leilao';
import { Mensagem } from '../entities/mensagem';

@Injectable({
  providedIn: 'root'
})
export class LeilaoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<Leilao[]>("http://localhost:8080/leilao");
  }

  buscar( id: string ): Observable<Leilao>{
    return this.http.get<Leilao>("http://localhost:8080/leilao/" + id)
  }

  incluir( leilao: Leilao ): Observable<Mensagem>{
    return this.http.post<Mensagem>("http://localhost:8080/leilao",leilao);
  }

  alterar( leilao: Leilao): Observable<Mensagem>{
    return this.http.put<Mensagem>("http://localhost:8080/leilao", leilao);
  }

  excluir( leilao: Leilao): Observable<Mensagem>{
    return this.http.delete<Mensagem>("http://localhost:8080/leilao/"+ leilao.idLeilao);
  }

}
