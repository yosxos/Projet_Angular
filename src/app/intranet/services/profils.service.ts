import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collection, doc, Firestore, getDoc, getDocs, setDoc } from '@angular/fire/firestore';
import { ProfileI } from 'src/app/modeles/pages-i';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {
  profils: Array<{id:string ,data:ProfileI}> = []

  constructor(private bdd: Firestore,private auth:Auth) {
    this.getFireProfils();
  }
  async getFireProfils() {
    await getDocs(collection(this.bdd, 'profils')).then(
      pers => {
        console.log(pers);
        pers.forEach(p => {
          console.log(p.id, p.data());
          this.profils.push({ id: p.id, data:p.data() as ProfileI });
        })
      }
    ).catch(erreur => console.log("Erreur", erreur));

  }
  async updateFireProfil(code: string, data: ProfileI) {
    const docProfil= doc(this.bdd, 'profils', code)
    await setDoc(docProfil, data, { merge: true });

  }
}
