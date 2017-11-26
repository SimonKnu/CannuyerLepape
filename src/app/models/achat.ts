export class Achat {
  private _mail: string;
  private _id_musique: number;
  private _statut: number;

  constructor(mail: string, id_musique: number, statut: number) {
    this._mail = mail;
    this._id_musique = id_musique;
    this._statut = statut;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get id_musique(): number {
    return this._id_musique;
  }

  set id_musique(value: number) {
    this._id_musique = value;
  }

  get statut(): number {
    return this._statut;
  }

  set statut(value: number) {
    this._statut = value;
  }

  public getCleanDataForSending(): any {
    return {
      'Mail': this.mail,
      'Id_musique': this.id_musique,
      'Statut': this.statut
    };
  }

  public static fromJSON(rawAchat: any): Achat {
    return new Achat(rawAchat['Mail'], rawAchat['Id_musique'],
      rawAchat['Statut']);
  }
}
