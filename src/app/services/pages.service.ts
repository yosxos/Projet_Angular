import { Injectable } from '@angular/core';
import { PagesI } from '../modeles/pages-i';
import { PagesII } from '../modeles/pages-ii';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  mentions:PagesI ={
    titre:"Mentions légales",
    contenu:"Ces mdsfsdqfdsffqfefef"
  };

  profil:PagesII ={
    Titre:"Profile:",
    Nom:"yas",
    Prenom:"ait"

  };

  constructor() { }


  tronqueChaine(str:string=""){
    return str.substr(0,150)
  }
}
