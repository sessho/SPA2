import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from "../app/components/home/home.component";
import { AboutComponent } from "../app/components/about/about.component";
import { CharactersComponent } from "../app/components/characters/characters.component";
import { CharacterComponent } from "../app/components/character/character.component";


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:index', component: CharactersComponent },
  { path: 'character/:id', component: CharacterComponent },
  { path: '**', pathMatch:'full',redirectTo:'home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});
