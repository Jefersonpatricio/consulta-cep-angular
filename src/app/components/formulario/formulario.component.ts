import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/cep';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  cep!: string;

  address: Cep;

  result: boolean = false;

  constructor(private service: ConsultaService){
    this.address={
      cep:'',
      localidade:'',
      logradouro: '',
      bairro: '',
      uf: '',
      ddd: '',
    }
  }

  ngOnInit(): void {}

  buscaCEP(){
    console.log(this.cep);
    
    this.service.getCEP(this.cep).subscribe((data) => {
      this.result = true;
      this.address = data;
    })

    } 
  }
