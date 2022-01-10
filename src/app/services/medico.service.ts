import { Medico } from './../entities/medico';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensagem } from '../entities/mensagem';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  constructor(private http : HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<Medico[]>("http://localhost:8080/medico");
  }

  buscar( id: string ): Observable<Medico>{
    return this.http.get<Medico>("http://localhost:8080/medico/" + id)
  }

  incluir( medico: Medico ): Observable<Mensagem>{
    return this.http.post<Mensagem>("http://localhost:8080/medico",medico);
  }

  alterar( medico: Medico): Observable<Mensagem>{
    return this.http.put<Mensagem>("http://localhost:8080/medico", medico);
  }

  excluir( medico: Medico): Observable<Mensagem>{
    return this.http.delete<Mensagem>("http://localhost:8080/medico/" + medico.idMedico);
  }

}
