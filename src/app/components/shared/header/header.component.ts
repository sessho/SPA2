import { Component, OnInit } from '@angular/core';

// Services
import { CharactersService } from "../../../services/characters.service";

// Router
import { Router } from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _cs:CharactersService,
    private _router: Router) { }

  ngOnInit() {
  }

  search(termino:string){
    termino = termino.toLowerCase();
    this._router.navigate(['/characters',termino]);      
  }
}
