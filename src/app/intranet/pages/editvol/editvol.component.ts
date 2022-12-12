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
  vol:VolI =<VolI>{} ;
  code: string;
  form: FormGroup
  public fileTypes = Object.values(HabilitationsE);
  ngOnInit() {

    const code = this.route.snapshot.params["code"];
    this.code = code;
    this.getVol(code)

  }

  getVol(code: string) {
    const vol = this.compagnies.getVol(code);
    this.vol=this.compagnies.vols.find(vol=> vol.code==code)

  }

  updateVol(){
    this.compagnies.updateFireVol(this.vol.code,this.vol)

  }





}
