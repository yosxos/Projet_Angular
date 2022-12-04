import { Component, OnInit } from '@angular/core';
import { PersonnelI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';
import { HabilitationsE } from '../../modeles/compagnie-i';
import { NgForm } from '@angular/forms';
import { combineAll } from 'rxjs';

@Component({
  selector: 'app-createpers',
  templateUrl: './createpers.component.html',
  styleUrls: ['./createpers.component.css']
})
export class CreatepersComponent implements OnInit {

  personnel:PersonnelI ={nom:'',prenom:[''],habilitation: HabilitationsE.pilote};
  public fileTypes = Object.values(HabilitationsE);
  constructor(public compagnies:CompagnieService) { }

  ngOnInit(): void {
  }
  addPersonnel(empForm:NgForm):void{
    console.log(empForm.value)
    this.compagnies.addPersonel(empForm.value);


  }
}
