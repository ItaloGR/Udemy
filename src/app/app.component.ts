import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PainelComponent } from './painel/painel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements AfterViewInit{
  
  public jogoEmAndamento: boolean = true;
  public vitoria: boolean = false

  ngAfterViewInit(){
  }

  encerraJogoPrincipal(encerramento: string){
    this.vitoria = (encerramento === 'vitoria');
    this.jogoEmAndamento = false;    
  }

  reiniciajogo(){
    this.jogoEmAndamento = true;
  }
}
