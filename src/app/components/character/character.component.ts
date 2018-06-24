import { Component, OnInit } from '@angular/core';

// activatedRoute  
import { ActivatedRoute } from "@angular/router";

// Services
import { CharactersService } from "../../services/characters.service";

// Interfaces
import { Character } from "../../interfaces/characters.interface";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  
  character:Character;

  constructor(private _cs:CharactersService,
              private ar:ActivatedRoute) {
    this.ar.params.subscribe( params => {
      this.character = this._cs.search(params['id'])[0]
    });
  }

}
