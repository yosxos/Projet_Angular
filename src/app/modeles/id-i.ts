export interface IdI {
  id: string|number;
  passe:string|number;
  uid?:string|number;
}
export interface UserI{
  uid:string|number;
  nom:string;
  prenoms:Array<string>;
  statut?:string;
}
