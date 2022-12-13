import { Component, OnInit, Input} from '@angular/core';
import { Auth,updateProfile } from '@angular/fire/auth';
import { CompagnieService } from 'src/app/intranet/services/compagnie.service';
import { ProfilsService } from 'src/app/intranet/services/profils.service';
import { UserI } from 'src/app/modeles/id-i';
import { ProfileI } from 'src/app/modeles/pages-i';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  user:UserI=<UserI>{};
  constructor(public profileServ:CompagnieService,public uServ:UserService,public auth:Auth) { }

  ngOnInit(): void {
    this.getUser();
  }
getUser(){
 this.user=this.profileServ.users.find(user=>user.id ==this.auth.currentUser.email).data;
 this.user.uid=this.auth.currentUser.uid
 if (!this.user.statut) {
  this.user.statut="normal"
 }
 this.uServ.user=this.user

}
/**
 * mettre a jour les données de l'identification
 */
updateProfile(){
  this.profileServ.updateFireUser(this.auth.currentUser.email,this.uServ.user)
  updateProfile(this.auth.currentUser!,{displayName:this.uServ.user.nom})
  .then(r=>console.log(this.auth.currentUser)).catch(e=>console.log(e))



}
}
