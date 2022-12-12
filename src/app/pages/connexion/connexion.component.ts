import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdI, UserI } from 'src/app/modeles/id-i';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  id:IdI ={id:'',passe:''};
  user:UserI =<UserI>{};

  constructor(private http:HttpClient, private routeur:Router, private u:UserService, private auth:AuthService) { }

  ngOnInit(): void {
  }
  logId(){
    console.log(this.id);
  }
  /**
   * identification json
   */
  checkId(){
    this.http.get<UserI>(`assets/ids/${this.id.id}@${this.id.passe}.json`).subscribe(
      retour => {
        console.log("Utilisateur connecté",retour);
        alert('Bienvenue'+retour.nom);
        this.u.user=retour;
        this.routeur.navigateByUrl('/intranet');

      },
      erreur => {
        console.log("Erreur");
        alert('Erreur'+(JSON.stringify(erreur)));
      }

    )
  }
  /**Identification Firebase */
  checkFromFire(){
    this.auth.identification(this.id.id as string,this.id.passe as string)
  }
}
