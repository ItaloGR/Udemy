import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { TabelaComponent } from './table/table.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { TentativasComponent } from './tentativas/tentativas.component';
import { ProgressoComponent } from './progresso/progresso.component';
import { APP_BASE_HREF, PlatformLocation } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    TopoComponent,
    PainelComponent,
    TentativasComponent,
    ProgressoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollingModule
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useFactory: (s: PlatformLocation) => s.getBaseHrefFromDOM(),
      deps: [PlatformLocation]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
