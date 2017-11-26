export class Playlist {
  private _id_playlist: number;
  private _nom: string;
  private _date_creation: string;
  private _mail: string;

  constructor(id_playlist: number, nom: string, mail: string){
    this._id_playlist = id_playlist;
    this._date_creation = new Date().toDateString();
    this._nom = nom;
    this._mail = mail;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get id_playlist(): number {
    return this._id_playlist;
  }

  set id_playlist(value: number) {
    this._id_playlist = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get date_creation(): string {
    return this._date_creation;
  }

  set date_creation(value: string) {
    this._date_creation = value;
  }

  public static fromJSON(rawMusique: any): Playlist {
    const tmp =  new Playlist(rawMusique['Id_playlist'], rawMusique['Nom'], rawMusique['Mail']);
    tmp.date_creation = rawMusique['Date_creation'];
    return tmp;
  }

  public static fromJSONs(rawMusique: any[]): Playlist[] {
    return rawMusique.map(Playlist.fromJSON);
  }

  public getCleanDataForSending(): any {
    return {
      'Nom': this.nom,
      'Date_creation': this.date_creation,
      'Mail': this.mail
    };
  }

  public getCleanDataForSendingUpdate(): any {
    return {
      'Id_playlist': this.id_playlist,
      'Nom': this.nom,
      'Date_creation': this.date_creation,
      'Mail': this.mail
    };
  }

  public getCleanDataForSendingDelete(id_musqiue: number, id_playlist: number): any {
    return {
      'id_musqiue': id_musqiue,
      'id_playlist': id_playlist
    };
  }
}
