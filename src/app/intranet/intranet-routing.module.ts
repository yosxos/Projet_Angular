import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AttributionsComponent } from './pages/attributions/attributions.component';
import { AvionsComponent } from './pages/avions/avions.component';
import { PersonnelsComponent } from './pages/personnels/personnels.component';

const routes: Routes = [
  {path:'',component:AcceuilComponent,children:[
    {path:'',component:AttributionsComponent},
    {path:'avions',component:AvionsComponent},
    {path:'personnels',component:PersonnelsComponent}

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
