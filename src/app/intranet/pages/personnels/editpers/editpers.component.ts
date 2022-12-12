import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonnelI } from '../../../modeles/compagnie-i';
import { CompagnieService } from '../../../services/compagnie.service';
import { HabilitationsE } from '../../../modeles/compagnie-i';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editpers',
  templateUrl: './editpers.component.html',
  styleUrls: ['./editpers.component.css']
})
export class EditpersComponent implements OnInit {

  public fileTypes = Object.values(HabilitationsE);
  constructor(private route: ActivatedRoute,
  public compagnies: CompagnieService) { }
  perxx: PersonnelI;
  id:string;

  ngOnInit(): void {
    const name = this.route.snapshot.params["id"];
    this.id=name;
    this.getPersonel(name)
  }
  getPersonel(nom: string) {
    this.perxx=this.compagnies.personnels$.find(pers=> pers.id==nom).data
  }
  deletePersonel(pers: PersonnelI) {
    this.compagnies.deletePersonel(pers)
  }
  updatePersonnel(){
    this.compagnies.updateFirePersonnel(this.id,this.perxx)

  }
}
