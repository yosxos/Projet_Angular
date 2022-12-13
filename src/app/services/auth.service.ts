import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly auth:Auth, private readonly route:Router,private uServ:UserService) { }
  identification(mail:string,mdp:string){
    signInWithEmailAndPassword(this.auth,mail,mdp)
    .then(d=>{
    console.log("utilisateur connecté")
    this.route.navigateByUrl("/intranet")

    })
    .catch(e=>console.log(e));
  }
}
