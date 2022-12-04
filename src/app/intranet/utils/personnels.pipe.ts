import { Pipe, PipeTransform } from '@angular/core';
import { PersonnelI } from '../modeles/compagnie-i';

@Pipe({
  name: 'personnels'
})
export class PersonnelsPipe implements PipeTransform {

  transform(personels: Array<PersonnelI>, filtre: string): Array<PersonnelI> {
    if(!filtre|| filtre.length==0)return personels;
    if(personels.length==0)return[];
    return personels.filter(p=>p.nom.indexOf(filtre)!=1);
  }

}
