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

  ngOnInit(): void {
    const name = this.route.snapshot.params["nom"];
    this.perxx = this.getPersonel(name)
    this.deletePersonel(this.getPersonel(name))
  }
  getPersonel(nom: string) {
    const personnel = this.compagnies.getPersonel(nom);
    return personnel;
  }
  deletePersonel(pers: PersonnelI) {
    this.compagnies.deletePersonel(pers)
  }
  editPersonnel(personnel: NgForm) {
    console.log(personnel.value)
    this.compagnies.addPersonel(personnel.value)

  }
}
