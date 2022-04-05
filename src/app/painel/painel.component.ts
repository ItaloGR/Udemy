import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  public tentativas: number;

  public totalPerguntas: number;

  @Output() public encerraJogo: EventEmitter<string> = new EventEmitter();


  constructor() { 
    this.totalPerguntas = this.frases.length
    this.tentativas = 3   

    this.progresso = 100 / this.totalPerguntas;
    this.rodadaFrase = this.frases[this.rodada];
  }

  ngOnInit(): void {
  }

  atualizaResposta(input: Event): void{
    this.resposta = (input.target as HTMLInputElement).value
  }

  verificaResposta(): void{
    if(this.rodadaFrase.frasePtbr.toUpperCase() === this.resposta.toUpperCase().trim())
    {
      if(this.totalPerguntas == this.rodada)
      {
        this.encerraJogo.emit('vitoria');
      }
      this.rodada++;
      this.rodadaFrase = this.frases[this.rodada];
      this.progressoTotal += this.progresso;
      this.resposta = ''

    }else{
      this.tentativas--;
      if(this.tentativas == -1)
      {
        this.encerraJogo.emit('derrota');
      }
    }
  }
}
