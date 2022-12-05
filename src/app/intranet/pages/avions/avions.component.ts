import { Component, OnInit } from '@angular/core';
import { AvionI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-avions',
  templateUrl: './avions.component.html',
  styleUrls: ['./avions.component.css']
})
export class AvionsComponent implements OnInit {

  avion:AvionI =<AvionI>{} ;
  filtreModele: string = '';
  constructor(public compagnies: CompagnieService) { }

  ngOnInit(): void {
  }
  selectAvion(code:string |number){
    this.avion = this.compagnies.avions.find(av=> av.code==code)!  }
  updateAvion(){
    this.compagnies.updateFireAvion(this.avion.code as string ,this.avion)

  }
  resetAvion(){
    this.avion=<AvionI>{};
  }
}
