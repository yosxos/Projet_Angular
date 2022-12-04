import { Component, OnInit } from '@angular/core';
import { PersonnelI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit {
  filtreModele:string='';

  constructor(public compagnies:CompagnieService,
    private _router:Router) { }

  ngOnInit(): void {
  }
  editButtonClick(personnel:string){
    this._router.navigate(['/intranet/editpers',personnel]);

  }
  addButtonClick(){
    this._router.navigate(['/intranet/createpers']);

  }

}
