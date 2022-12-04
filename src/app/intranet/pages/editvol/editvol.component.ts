import { Component, OnInit } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HabilitationsE, VolI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';
import { AvionsComponent } from '../avions/avions.component';

@Component({
  selector: 'app-editvol',
  templateUrl: './editvol.component.html',
  styleUrls: ['./editvol.component.css']
})
export class EditvolComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private route:ActivatedRoute,
    public compagnies:CompagnieService) { }
    form:FormGroup
    vol:VolI;
    code:string;
    public fileTypes = Object.values(HabilitationsE);
  ngOnInit() {
    this.form= this.fb.group( {
    code:"",
    avion:this.fb.group({
    modele:"",
    capacite:0,
    autonomie:0,
    code:" "
  }),
  date:new Date(0),
  personnel:this.fb.array([
    this.addPersonnelForm()
  ]),
  aeroportDepart:"",
  aeroportArrivee:"",
  duree:0

    })
    const code=this.route.snapshot.params["code"];
    this.code=code;
    this.vol=this.getVol(code);
    this.loadingVol(this.vol);
    console.log(this.vol)
    this.deleteVol(this.vol)
  }
  loadingVol(vol:VolI){
    this.form.patchValue(vol )
  }
  getVol(code:string){
    const vol =this.compagnies.getVol(code);
    return vol
  }
  editVol(vol:FormGroup){
    this.compagnies.deleteVol(vol.value);
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
  deleteVol(vol:VolI){
    this.compagnies.deleteVol(vol)
  }
  addPersonnelCLick():void{
    (<FormArray>this.form.get('personnel')).push(this.addPersonnelForm());
  }
  get refForm() {
    return this.form.get('personnel') as FormArray;
  }
}
