import { Injectable } from '@angular/core';

// Interfaces
import { Character } from "../interfaces/characters.interface";

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

    private c:Character[] = [
      {
        nombre: "El Chavo",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "Ratero, Chavito",
        img: "assets/img/chavo.png"
      },
      {
        nombre:"Quico",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "Cachetes de marrana flaca",
        img: "assets/img/quico.png"
      },
      {
        nombre:"Señor Barriga",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "Ya valio Barriga",
        img: "assets/img/barriga.png"
      },
      {
        nombre:"Bruja del 71",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "La de don ramon",
        img: "assets/img/bruja.png"
      },
      {
        nombre:"Don Ramón",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "Rorro",
        img: "assets/img/donramon.png"
      },
      {
        nombre:"Doña Florinda",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "Vieja chancluda",
        img: "assets/img/florinda.png"
      },
      {
        nombre:"Godinez",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "El godinez",
        img: "assets/img/godinez.png"
      },
      {
        nombre:"Jaimito el cartero",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "Carterito",
        img: "assets/img/jaimito.png"
      },
      {
        nombre:"Profesor girafales",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "Maestro longaniza",
        img: "assets/img/longaniza.png"
      },
      {
        nombre:"Mama de Paty",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "La otra de don ramon",
        img: "assets/img/mamaPaty.png"
      },
      {
        nombre:"Ñoño",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "Gordito",
        img: "assets/img/nono.png"
      },
      {
        nombre:"Paty",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "la del chavo",
        img: "assets/img/paty.png"
      },
      {
        nombre:"Popis",
        bio: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium illum amet ut. Deleniti quasi distinctio fugiat aut nemo in! Ab, doloremque! Odio voluptas commodi quia modi quidem. Corrupti, velit sint.",
        apodo: "La otra del chavo",
        img: "assets/img/popis.png"
      }
    ];

    constructor() { }

    getCharacters(){
      return this.c;
    }
    getCharacter(index:string){
      console.log(index)

      

      return this.c[index];
    }

    search(qry:string) {
      qry = qry.toLowerCase();
      let busqueda:Character[] = [];
      this.c.forEach( object => {
        let nombre = object.nombre.toLowerCase();
        if (nombre.indexOf(qry) > -1) {
          busqueda.push(object);
        }
      });
      return busqueda;
    }
}