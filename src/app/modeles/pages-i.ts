/***INterface d'une page utilisée pour typer nos objets */
export interface PagesI {
  titre:string;
  intro?:string;
  contenu?:string;
}

export interface ProfileI {
  Nom:string;
  Prenom:string;
  contenu?:string;
}

export interface ContenusI {
  mentions:PagesI;
  profile:ProfileI;
}

