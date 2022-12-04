import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AvionI, PersonnelI, VolI } from '../modeles/compagnie-i';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {
  vols:VolI[]=<VolI[]>{}
  personnels:PersonnelI[]=<PersonnelI[]>{}
  avions:AvionI[]=<AvionI[]>{}


  constructor(private readonly http:HttpClient) {
    this.getVols();
    this.getPersonels();
    this.getAvions();
  }
getVols(){
  this.http.get<VolI[]>('assets/data/vols.json').subscribe(p => {console.log("Data du fichier json",p);
  this.vols =p;});
}
getPersonels(){
  this.http.get<PersonnelI[]>('assets/data/personnels.json').subscribe(p => {console.log("Data du fichier json",p);
  this.personnels =p;
});
}
getPersonel(name:string){
  return this.personnels.filter((d)=>d.nom ==name)[0];
}
addPersonel(personnel:PersonnelI){
  const body=JSON.stringify(personnel);
  this.personnels.push(personnel);
  console.log(this.personnels);
}
deletePersonel(pers:PersonnelI){
  this.personnels = this.personnels.filter(obj =>   obj !== pers);
}

getAvions(){
  this.http.get<AvionI[]>('assets/data/avions.json').subscribe(p => {console.log("Data du fichier json",p);
  this.avions =p;
});
}


}
