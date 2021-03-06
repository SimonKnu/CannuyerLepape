import {DatePipe} from "@angular/common";
import {SystemJsNgModuleLoader} from "@angular/core";

export class Membre {
  private _nom: string;
  private _prenom: string;
  private _mail: string;
  private _telephone: string;
  private _date_naissance: string;
  private _pays: string;
  private _ville: string;
  private _rue: string;
  private _code_postal: number=0;
  private _argent: number=0;
  private _date_inscription: string;
  private _administrateur: boolean=false;
  private _mot_de_passe:string="";

  constructor(mail: string="", mot_de_passe:string="", nom: string="", prenom: string="", tel: string = "",naissance:string="",pays:string="",ville:string="",rue:string="",postal:number=0, argent:number=0, admin:boolean=false) {
    this._mail = mail;
    this._mot_de_passe = mot_de_passe;
    this._nom = nom;
    this._prenom = prenom;
    this._telephone = tel;
    this._date_naissance = naissance;
    this._pays = pays;
    this._ville = ville;
    this._rue = rue;
    this._code_postal = postal;
    this._argent = argent;
    let temporaireDate = new Date();
    this._date_inscription = temporaireDate.getDate()+"/"+(temporaireDate.getMonth()+1)+"/"+temporaireDate.getFullYear();
    this._administrateur = admin;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }

  get date_naissance(): string {
    return this._date_naissance;
  }

  set date_naissance(value: string) {
    this._date_naissance = value;
  }

  get pays(): string {
    return this._pays;
  }

  set pays(value: string) {
    this._pays = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }

  get rue(): string {
    return this._rue;
  }

  set rue(value: string) {
    this._rue = value;
  }

  get code_postal(): number {
    return this._code_postal;
  }

  set code_postal(value: number) {
    this._code_postal = value;
  }

  get argent(): number {
    return this._argent;
  }

  set argent(value: number) {
    this._argent = value;
  }

  get date_inscription(): string {
    return this._date_inscription;
  }

  set date_inscription(value: string) {
    this._date_inscription = value;
  }

  get administrateur(): boolean {
    return this._administrateur;
  }

  set administrateur(value: boolean) {
    this._administrateur = value;
  }

  get mot_de_passe(): string {
    return this._mot_de_passe;
  }

  set mot_de_passe(value: string) {
    this._mot_de_passe = value;
  }

  public static fromJSON(rawMembre : any) : Membre {
    const tmpMembre = new Membre();
    tmpMembre.mail= rawMembre["Mail"];
    tmpMembre.mot_de_passe= rawMembre["Mot_de_passe"];
    tmpMembre.nom= rawMembre["Nom"];
    tmpMembre.prenom= rawMembre["Prenom"];
    tmpMembre.telephone= rawMembre["Telephone"];
    tmpMembre.date_naissance= rawMembre["Date_naissance"];
    tmpMembre.pays= rawMembre["Pays"];
    tmpMembre.ville= rawMembre["Ville"];
    tmpMembre.rue= rawMembre["Rue"];
    tmpMembre.code_postal= rawMembre["Code_postal"];
    tmpMembre.argent= rawMembre["Argent"];
    tmpMembre.date_inscription= rawMembre["Date_inscription"];
    tmpMembre.administrateur= rawMembre["Administrateur"];

    return tmpMembre;
  }

  public getCleanDataForSendingUpdate(): any {
    return {
      'Mail': this.mail,
      'Nom': this.nom,
      'Prenom': this.prenom,
      'Telephone': this.telephone,
      'Date_naissance': this.date_naissance,
      'Pays': this.pays,
      'Ville': this.ville,
      'Rue': this.rue,
      'Code_postal': this.code_postal
    };
  }

  public getCleanDataForSending(): any {
    return {
      'Mail': this.mail,
      'Mot_de_passe': this.mot_de_passe,
      'Nom': this.nom,
      'Prenom': this.prenom,
      'Telephone': this.telephone,
      'Date_naissance': this.date_naissance,
      'Pays': this.pays,
      'Ville': this.ville,
      'Rue': this.rue,
      'Code_postal': this.code_postal,
      'Argent': this.argent,
      'Date_inscription': this.date_inscription,
      'Administrateur': this.administrateur
    };
  }

  public equals(m:Membre):boolean{
    return m.nom === this.nom
      && m.prenom === this.prenom
      && m.telephone === this.telephone
      && m.date_naissance === this.date_naissance
      && m.pays === this.pays
      && m.ville === this.ville
      && m.rue === this.rue
      && m.code_postal === this.code_postal;
  }
}
