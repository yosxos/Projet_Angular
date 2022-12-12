import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Firestore, collection, getDocs, doc, getDoc, deleteDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProfileI } from 'src/app/modeles/pages-i';
import { AvionI, PersonnelI, VolI } from '../modeles/compagnie-i';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {
  vols: Array<VolI> = []
  personnels: Array<(PersonnelI)> = []
  personnels$: Array<{ id: string, data: PersonnelI }> = []
  avions: Array<AvionI> = [];
  profils: Array<{id:string ,data:ProfileI}> = []
  constructor(private readonly http: HttpClient,
    private bdd: Firestore) {
    //this.getVols();
    //this.getPersonels();
    //this.getAvions();
    this.getFireVols();
    this.getFirePersonnels();
    this.getFireAvions();
    this.getFireProfils();
  }
  getVols() {
    this.http.get<VolI[]>('assets/data/vols.json').subscribe(p => {
      console.log("Data du fichier json", p);
      this.vols = p;
    });
  }
  getPersonels() {
    this.http.get<PersonnelI[]>('assets/data/personnels.json').subscribe(p => {
      console.log("Data du fichier json", p);
      this.personnels = p;
    });
  }
  getPersonel(name: string) {
    return this.personnels.filter((d) => d.nom == name)[0];
  }
  addPersonel(personnel: PersonnelI) {
    const body = JSON.stringify(personnel);
    this.personnels.push(personnel);
    console.log(this.personnels);
  }
  deletePersonel(pers: PersonnelI) {
    this.personnels = this.personnels.filter(obj => obj !== pers);
  }
  /**
   * Récuperer les avions depuis la base de données Firebase
   */
  async getFireAvions() {
    await getDocs(collection(this.bdd, 'avions')).then(
      av => {
        console.log(av);
        av.forEach(a => {
          console.log(a.id, a.data());
          this.avions.push(a.data() as AvionI);
        })
      }
    ).catch(erreur => console.log("Erreur", erreur));

  }
  /**
 * Récuperer le personnel depuis la base de données Firebase
 */
  async getFirePersonnels() {
    await getDocs(collection(this.bdd, 'personnels')).then(
      pers => {
        console.log(pers);
        pers.forEach(p => {
          console.log(p.id, p.data());
          this.personnels$.push({ id: p.id, data: p.data() as PersonnelI });
        })
      }
    ).catch(erreur => console.log("Erreur", erreur));

  }
  /**
* Récuperer le personnel depuis la base de données Firebase
*/
  async getFireVols() {
    await getDocs(collection(this.bdd, 'vols')).then(
      vol => {
        console.log(vol);
        vol.forEach(v => {
          console.log(v.id, v.data());
          this.vols.push(v.data() as VolI);
        })
      }
    ).catch(erreur => console.log("Erreur", erreur));

  }
  /**
   * Recuperer un avion de la base de données avec son code
   * @param code
   */
  async getFireAvion(code: string) {
    const docAvion = doc(this.bdd, 'avions', code)
    await getDoc(docAvion)
  }
  /**
 * Recuperer un vol de la base de données avec son code
 * @param code
 */
  async getFireVol(code: string) {
    const docVol = doc(this.bdd, 'vols', code)
    await getDoc(docVol)
  }
  /**
* Recuperer un vol de la base de données avec son code
* @param code
*/
  async getFirePersonnel(code: string) {
    const docPersonnel = doc(this.bdd, 'personnels', code)
    await getDoc(docPersonnel)
  }
  /**
   * Delete avion from data base
   * @param code
   */
  async delFireAvion(code: string) {
    const docAvion = doc(this.bdd, 'avions', code)
    await deleteDoc(docAvion)
  }
  /**
   * Update avion in data base
   * @param code
   * @param data
   */
  async updateFireAvion(code: string, data: AvionI) {
    const docAvion = doc(this.bdd, 'avions', code)
    await setDoc(docAvion, data, { merge: true });

  }
  /**
 * Update personnel in data base
 * @param code
 * @param data
 */
  async updateFirePersonnel(code: string, data: PersonnelI) {
    const docPersonnel = doc(this.bdd, 'personnels', code)
    await setDoc(docPersonnel, data, { merge: true });

  }
  /**
   * Update the flight in fire base
   * @param code
   * @param data
   */
  async updateFireVol(code: string, data: VolI) {
    const docVol = doc(this.bdd, 'vols', code)
    await setDoc(docVol, data, { merge: true });
  }

  getAvions() {
    this.http.get<AvionI[]>('assets/data/avions.json').subscribe(p => {
      console.log("Data du fichier json", p);
      this.avions = p;
    });
  }


  getVol(code: string) {
    return this.vols.filter((d) => d.code == code)[0];
  }

  addVol(vol: VolI) {
    const body = JSON.stringify(vol);
    this.vols.push(vol);
    console.log(this.personnels);
  }

  deleteVol(vol: VolI) {
    this.vols = this.vols.filter(obj => obj !== vol);

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
