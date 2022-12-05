import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AddvolComponent } from './pages/editvol/addvol/addvol.component';
import { AttributionsComponent } from './pages/attributions/attributions.component';
import { AvionsComponent } from './pages/avions/avions.component';
import { CreatepersComponent } from './pages/personnels/createpers/createpers.component';
import { EditpersComponent } from './pages/personnels/editpers/editpers.component';
import { EditvolComponent } from './pages/editvol/editvol.component';
import { PersonnelsComponent } from './pages/personnels/personnels.component';

const routes: Routes = [
  {path:'',component:AcceuilComponent,children:[
    {path:'',component:AttributionsComponent},
    {path:'avions',component:AvionsComponent},
    {path:'personnels',component:PersonnelsComponent},
    {path:'editpers/:nom',component:EditpersComponent},
    {path:'createpers',component:CreatepersComponent},
    {path:'editvol/:code',component:EditvolComponent},
    {path:'addvol',component:AddvolComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
