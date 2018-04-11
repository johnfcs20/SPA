import { Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HeroeService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent {

heroe: any = {};

  constructor(private ActivateRoute: ActivatedRoute, private _heroesService: HeroeService) {

    this.ActivateRoute.params.subscribe(params => {
      console.log(params['id']);
      this.heroe=this._heroesService.getHeroe(params['id']);

    })

  }



}
