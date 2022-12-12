import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContenusI, PagesI, ProfileI } from '../modeles/pages-i';


@Injectable({
  providedIn: 'root'
})
export class PagesService {
  pages:ContenusI =<ContenusI> {};

  mentions:PagesI ={
    titre:"Mentions légales",
    contenu:"Copy rights ..."
  };



  constructor(private readonly http:HttpClient) {
    this.getPages();
  }

  /**Recuperer le n premier character  */
  tronqueChaine(str:string=""){
    return str.substr(0,150)
  }
  /**Recuperer le contenu des pages depuis le fichiers json */
  getPages(){
    this.http.get<ContenusI>('assets/data/pages.json').subscribe(
       /**{
        next(data){
          console.log('Current Position: ',data)

        },
        error(msg){
          console.log('Error Getting Location ',msg)

        },
        complete(){
          console.log('Requête complete: ')

        }

      }*/
    p => {console.log("Donne du fichier json",p);

    this.pages =p;}

    );
  }
}
