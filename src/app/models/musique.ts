export class Musique {
  private _id_musique: number;
  private _auteur: string;
  private _titre: string;
  private _style: string;
  private _url: string;
  private _prix: number;

  constructor(id_musique: number, auteur: string, titre: string, style: string, url: string, prix: number){
    this._id_musique = id_musique;
    this._auteur = auteur;
    this._titre = titre;
    this._style = style;
    this._url = url;
    this._prix = prix;
  }

  get id_musique(): number {
    return this._id_musique;
  }

  set id_musique(value: number) {
    this._id_musique = value;
  }
  
  get auteur(): string {
    return this._auteur;
  }

  set auteur(value: string) {
    this._auteur = value;
  }

  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get style(): string {
    return this._style;
  }

  set style(value: string) {
    this._style = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    if (value > 0) {
      this._prix = value;
    }
  }

  public static fromJSON(rawMusique: any): Musique {
    return new Musique(rawMusique['Id_musique'], rawMusique['Auteur'],
      rawMusique['Titre'], rawMusique['Style'], rawMusique['Url'], rawMusique['Prix']);
  }

  public static fromJSONs(rawMusique: any[]): Musique[] {
    return rawMusique.map(Musique.fromJSON);
  }

  public getCleanDataForSending(): any {
    return {
      "Auteur": this.auteur,
      "Titre": this.titre,
      "Style": this.style,
      "Url": this.url,
      "Pirx": this.prix
    };
  }
}
