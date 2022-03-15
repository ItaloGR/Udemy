import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  coracaoCheio: string = "/assets/coracao_cheio.png";
  coracaoVazio: string = "/assets/coracao_vazio.png";

  chances: string[];

  @Input() public total: number = 0;
  @Input() public restante: number = 0;

  constructor() {
    this.chances = []
  }

  ngOnInit(): void {
    for(let i = 0; i < this.total; i++){
      this.chances.push(this.coracaoCheio)
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["restante"].previousValue != this.restante)
      this.chances.map((_value: string, index: number)=>{
          if((this.restante) < index+1)
          this.chances[index] = this.coracaoVazio;
        }
    )
  }

}
