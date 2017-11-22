export class Playlist {
  private _id_playlist: string;
  private _nom: string;
  private _date_creation: Date = new Date();
  private _mail: string;

  constructor(id_playlist: string, nom: string, date_creation: Date, mail: string){
    this._id_playlist = id_playlist;
    this._nom = nom;
    this._date_creation = date_creation;
    this._mail = mail;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get id_playlist(): string {
    return this._id_playlist;
  }

  set id_playlist(value: string) {
    this._id_playlist = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get date_creation(): Date {
    return this._date_creation;
  }

  set date_creation(value: Date) {
    this._date_creation = value;
  }

  public static fromJSON(rawMusique: any): Playlist {
    return new Playlist(rawMusique['Id_playlist'], rawMusique['Nom'],
      rawMusique['Date_creation'], rawMusique['Mail']);
  }

  public static fromJSONs(rawMusique: any[]): Playlist[] {
    return rawMusique.map(Playlist.fromJSON);
  }

  public getCleanDataForSending(): any {
    return {
      'Nom': this.nom,
      'Date_creation': this.date_creation.toDateString(),
      'Mail': this.mail
    };
  }

  public getCleanDataForSendingUpdate(): any {
    return {
      'Id_playlist': this.id_playlist,
      'Nom': this.nom,
      'Date_creation': this.date_creation.toDateString(),
      'Mail': this.mail
    };
  }
}
