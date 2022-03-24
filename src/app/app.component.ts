import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PainelComponent } from './painel/painel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements AfterViewInit{
  
  @ViewChild("MeuOvo") set appPainel(painel: PainelComponent)
  {
    painel.encerraJogo.emit = this.encerraJogoPrincipal;
  };

  ngAfterViewInit(){
   // this.appPainel.encerraJogo.emit = this.encerraJogoPrincipal;
  }

  encerraJogoPrincipal(encerramento: string){
    console.log(encerramento);
  }
}
