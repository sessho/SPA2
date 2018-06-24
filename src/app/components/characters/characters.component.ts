import { Component, OnInit } from '@angular/core';

// Services
import { CharactersService } from "../../services/characters.service";

// Interfaces
import { Character } from "../../interfaces/characters.interface";

// Router
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {

  characters:Character[] = [];

  constructor(private _charactersService:CharactersService,
              private router:Router,
              private ar:ActivatedRoute) {
                this.ar.params.subscribe(params => {
                  if (params['index']) {
                    // hacer un search con el termino 
                    this.characters = this._charactersService.search(params['index']);
                  }else{
                    this.characters = this._charactersService.getCharacters();
                  }
                });
                
              }


  /*character(index:number){
    this.router.navigate(['/character',index]);
  }*/

  character(index:string){
    this.router.navigate(['/character',index]);
  }
}
