import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from '../modeles/id-i';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token:string|number="MOnTokenAvecUneValeurQual";// Token recu après la connextion
  user:UserI =<UserI>{};//Utilisateur avec ses propriétées
  constructor(private routeur:Router) { }
  /**Déconnecter un utilisiteur */
  deconnextion(){
    this.user =<UserI>{};
    this.routeur.navigateByUrl("/")
  }
}
