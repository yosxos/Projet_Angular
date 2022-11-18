import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from '../modeles/id-i';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:UserI =<UserI>{};
  constructor(private routeur:Router) { }
  deconnextion(){
    this.user =<UserI>{};
    this.routeur.navigateByUrl("/")


  }
}
