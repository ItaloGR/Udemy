import { Component, OnInit } from '@angular/core';
import { Frase } from 'src/shared/frases.model';
import { FRASES } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza a fraze:';
  public resposta: string = '';

  public rodada: number = 0;
  public rodadaFrase: Frase;


  public progresso: number = 0;
  public progressoTotal: number = 0;

  public tentativasTotal: number;
  public tentativasRestantes: number;

  public totalPerguntas: number;
  constructor() { 
    this.totalPerguntas = this.frases.length
    this.rodadaFrase = this.frases[this.rodada];
    this.progresso = 100 / this.totalPerguntas;

    
    this.tentativasTotal = this.totalPerguntas
    this.tentativasRestantes = this.totalPerguntas
  }

  ngOnInit(): void {
  }

  atualizaResposta(input: Event): void{
    this.resposta = (input.target as HTMLInputElement).value
    this.resposta = (<HTMLInputElement>input.target).value
  }

  verificaResposta(): void{
    if(this.rodadaFrase.frasePtbr.toUpperCase() === this.resposta.toUpperCase())
    {
      if(this.totalPerguntas = this.rodada)
      {
        alert('Very good!');
        return;
      }
      this.rodada++;
      this.rodadaFrase = this.frases[this.rodada];
      this.progressoTotal += this.progresso;
      alert('Tradução correta')
    }else{
      this.tentativasRestantes--;
      if(this.tentativasRestantes == 0)
      {
        alert('Fim de jogo!');
        window.location.reload();
      }

      alert('Tradução errada')
    }
  }
}
