import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas

import {APP_ROUTING} from './app.route'


//servicios


//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { HeroesComponent } from './components/shared/heroes/heroes.component';
import {HeroeService} from './servicios/heroes.service';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [

      HeroeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
