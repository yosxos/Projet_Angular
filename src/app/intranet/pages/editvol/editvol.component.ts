import { Component, OnInit } from '@angular/core';
import { FormArray, NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HabilitationsE, PersonnelI, VolI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';
import { AvionsComponent } from '../avions/avions.component';

@Component({
  selector: 'app-editvol',
  templateUrl: './editvol.component.html',
  styleUrls: ['./editvol.component.css']
})
export class EditvolComponent implements OnInit {
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    public compagnies: CompagnieService) { }
  form: FormGroup
  vol: VolI;
  code: string;
  public fileTypes = Object.values(HabilitationsE);
  ngOnInit() {
    this.form = this.fb.group({
      code: "",
      avion: this.fb.group({
        modele: "",
        capacite: 0,
        autonomie: 0,
        code: " "
      }),
      date: 0,
      personnel: this.fb.array([
        this.addPersonnelForm()
      ]),
      aeroportDepart: "",
      aeroportArrivee: "",
      duree: 0

    })
    const code = this.route.snapshot.params["code"];
    this.code = code;
    this.vol = this.getVol(code);
    this.patchForm(this.vol);
    console.log(this.form.value, this.vol)

  }
  patchForm(vol: VolI): void {
    console.log(vol)
    this.form.patchValue(vol);
    //   {
    //      code:vol.code,
    //      avion:{
    //      modele:vol.avion.modele,
    //      capacite:vol.avion.capacite,
    //      autonomie:vol.avion.autonomie,
    //      code:vol.avion.code
    //    },
    //    date:vol.date,
    //    aeroportDepart:vol.aeroportDepart,
    //    aeroportArrivee:vol.aeroportArrivee,
    //    duree:vol.date,
    //    personnel: this.getPerso(vol),
    // })


  }
  loadingVol1(vol: VolI) {
    this.form

  }
  loadingVol(vol: VolI) {
    this.form.patchValue(vol.personnel);
    console.log(this.form.value)
  }
  getVol(code: string) {
    const vol = this.compagnies.getVol(code);
    return vol
  }
  editVol(vol: FormGroup) {
    this.deleteVol(this.vol)
    this.compagnies.addVol(vol.value);
  }
  addPersonnelForm(): FormGroup {
    return this.fb.group(
      {
        nom: "",
        prenom: [""],
        habilitation: "",
      }
    )


  }
  deleteVol(vol: VolI) {
    this.compagnies.deleteVol(vol)
  }
  addPersonnelCLick(): void {
    (<FormArray>this.form.get('personnel')).push(this.addPersonnelForm());
  }
  get refForm() {
    return this.form.get('personnel') as FormArray;
  }
}
