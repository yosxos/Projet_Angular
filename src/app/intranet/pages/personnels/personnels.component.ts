import { Component, OnInit } from '@angular/core';
import { PersonnelI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {
  filtreModele:string='';

  constructor(public compagnies:CompagnieService) { }

  ngOnInit(): void {
  }

}
