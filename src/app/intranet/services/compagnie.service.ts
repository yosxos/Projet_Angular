import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VolI } from '../modeles/compagnie-i';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {
  vols:VolI[]=<VolI[]>{}

  constructor(private readonly http:HttpClient) {
    this.getVols();
  }
getVols(){
  this.http.get<VolI[]>('assets/data/vols.json').subscribe(p => {console.log("Donne du fichier json",p);
  this.vols =p;});
}

}
