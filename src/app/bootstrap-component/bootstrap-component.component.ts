import { Component, OnInit } from '@angular/core';
import 'animate.css';
import { Paciente } from '../models/Paciente';
@Component({
  selector: 'app-bootstrap-component',
  templateUrl: './bootstrap-component.component.html',
  styleUrls: ['./bootstrap-component.component.css']
})
export class BootstrapComponentComponent implements OnInit {

  constructor() { }

  exibirTabela: boolean = false;

  Paciente = [
		{
		  nome: 'Christian',
		  sobrenome: 'Batman',
		  universo: 'DC',
		},
		{
      nome: 'Christian',
		  sobrenome: 'Superman',
		  universo: 'DC',
		},	
		{
      nome: 'Christian',
		  sobrenome: 'Mulher Maravilha',
		  universo: 'DC',
		},
		{
      nome: 'Christian',
		  sobrenome: 'Homem de Ferro',
		  universo: 'Marvel',
		},
		{
		  nome: 'Christian',
		  sobrenome: 'Capitão América',
		  universo: 'Marvel',
		},
    {
		  nome: 'Christian',
		  sobrenome: 'Homem Formiga',
		  universo: 'Marvel',
		},
	  ]

  model:Paciente = new Paciente;
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.model);
  }

  onMostrarTabela(){ 
    this.exibirTabela = !this.exibirTabela
  };

}
