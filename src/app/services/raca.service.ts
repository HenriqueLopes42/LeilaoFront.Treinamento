import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Raca } from '../entities/raca';
import { Mensagem } from '../entities/mensagem';

@Injectable({
  providedIn: 'root'
})
export class RacaService {

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<Raca[]>("http://localhost:8080/raca");
  }

  buscar( id: string ): Observable<Raca>{
    return this.http.get<Raca>("http://localhost:8080/raca/" + id)
  }

  incluir( raca: Raca ): Observable<Mensagem>{
    return this.http.post<Mensagem>("http://localhost:8080/raca",raca);
  }

  alterar( raca: Raca): Observable<Mensagem>{
    return this.http.put<Mensagem>("http://localhost:8080/raca", raca);
  }

  excluir( raca: Raca): Observable<Mensagem>{
    return this.http.delete<Mensagem>("http://localhost:8080/raca/"+ raca.idRaca);
  }
}
