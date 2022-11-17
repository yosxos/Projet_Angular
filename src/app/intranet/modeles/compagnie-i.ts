export interface CompagnieI {
}

export interface AvionI {
  modele:string;
  capacite:number;
  autonomie?:number;
  code:string|number


}
export interface PersonnelI{
  nom:string;
  prenom:Array<string>
  habilitation:HabilitationsE

}

export interface VolI{
  code:string|number ;
  avion:AvionI;
  date:Date;
  personnel:Array<PersonnelI>;
  aeroportDepart:string;
  aeroportArrivee:string;
  duree:number;
}
enum HabilitationsE {
  pilote = 'Pilote',
  copilote='Copilote',
  pnc='PNC'
}
