import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  constructor(
    private heroesService: RecipesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
    /*this.activatedRoute.params.subscribe( params => {
      this.heroes = heroesService.getHeroe(params['id']);
    });*/
  }

}
