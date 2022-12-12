import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Firestore , collection, getDocs, doc, getDoc, deleteDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AvionI, PersonnelI, VolI } from '../modeles/compagnie-i';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {
  vols: VolI[] = <VolI[]>{}
  personnels: PersonnelI[] = <PersonnelI[]>{}
  avions: Array<AvionI>= [];

  constructor(private readonly http: HttpClient,
    private bdd: Firestore) {
    this.getVols();
    this.getPersonels();
    //this.getAvions();
    this.getFireAvions();
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
   * Récuperer les données depuis la base de données Firebase
   */
  async getFireAvions() {
    await getDocs(collection(this.bdd, 'avions')).then(
      av => {
        console.log(av);
        av.forEach(a => {
          console.log(a.id ,a.data());
          this.avions.push(a.data() as AvionI);
        })
      }
    ).catch(erreur => console.log("Erreur", erreur));

  }
  /**
   * Recuperer un avion de la base de données avec son code
   * @param code
   */
  async getFireAvion(code:string){
    const docAvion = doc(this.bdd, 'avions',code)
    await getDoc(docAvion)
  }
  /**
   * Delete avion from data base
   * @param code
   */
  async delFireAvion(code:string){
    const docAvion = doc(this.bdd, 'avions',code)
    await deleteDoc(docAvion)
  }
  /**
   * Update avion in data base
   * @param code
   * @param data
   */
  async updateFireAvion(code:string , data:AvionI){
    const docAvion = doc(this.bdd, 'avions',code)
    await setDoc(docAvion,data,{merge:true});

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

}
