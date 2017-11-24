export class Playlistmusique {
  private _id_musique: number;
  private _id_playlist: number;

  constructor(id_musique: number, id_playlist: number) {
    this._id_musique = id_musique;
    this._id_playlist = id_playlist;
  }

  get id_musique(): number {
    return this._id_musique;
  }

  set id_musique(value: number) {
    this._id_musique = value;
  }

  get id_playlist(): number {
    return this._id_playlist;
  }

  set id_playlist(value: number) {
    this._id_playlist = value;
  }

  public getCleanDataForSending(): any {
    return {
      'Id_musique': this.id_musique,
      'Id_playlist': this.id_playlist
    };
  }
}
