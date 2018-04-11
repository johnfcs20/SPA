import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HeroeService, Heroe} from '../../servicios/heroes.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscador.component.html',

})
export class BuscarComponent implements OnInit {
  heroes: any [] = []
  termino: string ;

  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroeService) { }

  ngOnInit() {

this.activatedRoute.params.subscribe(params=>{
  this.termino=params['termino'];

  this.heroes = this._heroeService.buscarHeroes(params['termino']);
  console.log(this.heroes);
})

  }

  buscarHeroe(termino:string){

    //console.log(termino);
    this._heroeService.buscarHeroes(termino);

      }






  }


