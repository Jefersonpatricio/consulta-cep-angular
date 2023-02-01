import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cep } from '../cep';

@Injectable({
  providedIn: 'root'
})


export class ConsultaService {

  constructor(private http:HttpClient) { }

  getCEP(cep: string):Observable<Cep>{
    return this.http.get<Cep>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
