import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { HabilitationsE, VolI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-addvol',
  templateUrl: './addvol.component.html',
  styleUrls: ['./addvol.component.css']
})
export class AddvolComponent implements OnInit {
 form:FormGroup
  constructor(public compagnies:CompagnieService,
    public fb :FormBuilder) { }

  public fileTypes = Object.values(HabilitationsE);
  ngOnInit(): void {
    this.form= this.fb.group( {
      code:"",
  avion:this.fb.group({
    modele:"",
    capacite:0,
    autonomie:0,
    code:" "
  }),
  date:new Date(),
  personnel:this.fb.array([
    this.addPersonnelForm()
  ]),
  aeroportDepart:"",
  aeroportArrivee:"",
  duree:0

    })
  }
  addPersonnelCLick():void{
    (<FormArray>this.form.get('personnel')).push(this.addPersonnelForm());
  }
  addVol(vol:FormGroup){
    this.compagnies.addVol(vol.value);

  }
  addPersonnelForm():FormGroup{
    return this.fb.group(
      {
        nom:"",
        prenom:[""],
        habilitation:"",
      }
    )


  }
  get refForm():FormArray {
    return <FormArray>this.form.get('personnel');
  }

}
