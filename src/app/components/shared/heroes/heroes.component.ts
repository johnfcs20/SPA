import { Component, OnInit } from '@angular/core';
import {HeroeService, Heroe} from '../../../servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {
heroes: Heroe[] = [];
  constructor(private _HeroesService: HeroeService, private router:Router ) { }



  ngOnInit() {

    this.heroes = this._HeroesService.getHeroes();
    //console.log(this.heroes);





  }

  verHeroe(idx:number){
console.log(idx);

this.router.navigate(['/heroe',idx]);

  }

}
