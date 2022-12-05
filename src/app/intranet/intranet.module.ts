import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AvionsComponent } from './pages/avions/avions.component';
import { AttributionsComponent } from './pages/attributions/attributions.component';
import { PersonnelsComponent } from './pages/personnels/personnels.component';
import { AvionsPipe } from './utils/avions.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonnelsPipe } from './utils/personnels.pipe';
import { EditpersComponent } from './pages/personnels/editpers/editpers.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatepersComponent } from './pages/personnels/createpers/createpers.component';
import { EditvolComponent } from './pages/editvol/editvol.component';
import { AddvolComponent } from './pages/editvol/addvol/addvol.component';


@NgModule({
  declarations: [
    AcceuilComponent,
    AvionsComponent,
    AttributionsComponent,
    PersonnelsComponent,
    AvionsPipe,
    PersonnelsPipe,
    EditpersComponent,
    CreatepersComponent,
    EditvolComponent,
    AddvolComponent
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class IntranetModule { }
