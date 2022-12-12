import { Component, OnInit, Input} from '@angular/core';
import { Auth,updateProfile } from '@angular/fire/auth';
import { CompagnieService } from 'src/app/intranet/services/compagnie.service';
import { ProfilsService } from 'src/app/intranet/services/profils.service';
import { ProfileI } from 'src/app/modeles/pages-i';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profile:ProfileI=<ProfileI>{};
  constructor(public profileServ:CompagnieService,public auth:Auth) { }

  ngOnInit(): void {
    this.getProfile();
  }
getProfile(){
this.profile=this.profileServ.profils.find(profil=>profil.id ==this.auth.currentUser.email).data;
}
/**
 * mettre a jour les données de l'identification
 */
updateProfile(){
  this.profileServ.updateFireProfil(this.auth.currentUser.email,this.profile)
  updateProfile(this.auth.currentUser!,{displayName:this.profile.Nom})
  .then(r=>console.log(this.auth.currentUser)).catch(e=>console.log(e))



}
}
