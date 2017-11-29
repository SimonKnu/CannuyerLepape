export class Musique {

  private _id_musique: number;
  private _auteur: string;
  private _titre: string;
  private _style: string;
  private _preview: string;
  private _musiquecomplet: string;
  private _image: string;
  private _prix: number;

  constructor(id_musique: number, auteur: string, titre: string, style: string, preview: string, musiquecomplet: string, image: string, prix: number) {
    this._id_musique = id_musique;
    this._auteur = auteur;
    this._titre = titre;
    this._style = style;
    this._preview = preview;
    this._musiquecomplet = musiquecomplet;
    this._image = image;
    this._prix = prix;
  }

  get preview(): string {
    return this._preview;
  }

  set preview(value: string) {
    this._preview = value;
  }

  get musiquecomplet(): string {
    return this._musiquecomplet;
  }

  set musiquecomplet(value: string) {
    this._musiquecomplet = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get id_musique(): number {
    return this._id_musique;
  }

  set id_musique(value: number) {
    this.id_musique = value;
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

  get prix(): number {
    return this._prix;
  }

  set prix(value: number) {
    if (value >= 0) {
      this._prix = value;
    }
  }

  public static fromJSON(rawMusique: any): Musique {
    return new Musique(rawMusique['Id_musique'], rawMusique['Auteur'],
      rawMusique['Titre'], rawMusique['Style'], rawMusique['Preview'], rawMusique['Musiquecomplet'], rawMusique['Image'], rawMusique['Prix']);
  }

  public static fromJSONs(rawMusique: any[]): Musique[] {
    return rawMusique.map(Musique.fromJSON);
  }

  public getCleanDataForSending(): any {
    return {
      'Auteur': this.auteur,
      'Titre': this.titre,
      'Style': this.style,
      'Preview': this.preview,
      'Musiquecomplet': this.musiquecomplet,
      'Image': this.image,
      'Prix': this.prix
    };
  }

  public getCleanDataForSendingUpdate(): any {
    return {
      'Id_musique': this.id_musique,
      'Auteur': this.auteur,
      'Titre': this.titre,
      'Style': this.style,
      'Preview': this.preview,
      'Musiquecomplet': this.musiquecomplet,
      'Image': this.image,
      'Prix': this.prix
    };
  }
}
