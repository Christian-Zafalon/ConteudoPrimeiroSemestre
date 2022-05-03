import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-component',
  templateUrl: './meu-component.component.html',
  styleUrls: ['./meu-component.component.css']
})
export class MeuComponentComponent implements OnInit {


  InterPol = "Exemplo de Interpol";
  nomeFacul :string ="FACULDADE REGES";
  usarLink = true;
  vermelho= 'red';
  teste= "";
  Exercicio1="";
  nome="";
  usarCSS = false;
  Texto="";


  constructor() { }

  ngOnInit(): void {
  }


  botao(){
    console.log(this.teste);
  }

  unidirecional(){
    console.log("oii gente");
  }

  nomeButton(){
    this.nome = this.Exercicio1;
  }

  BtnColor() {
   if (this.usarCSS == false)
   {
     this.usarCSS = true;
   }else
   {
     this.usarCSS = false
   }
  }
}

