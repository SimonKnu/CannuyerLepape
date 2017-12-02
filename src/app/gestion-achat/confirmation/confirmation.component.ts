import {Component, OnInit} from '@angular/core';
import {AchatService} from "../../service/achat.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{

  private totalAPayer:number=0;

  constructor(private serviceAchat:AchatService) { }

  ngOnInit() {
    this.totalAPayer = this.serviceAchat.totalPanier;
  }
}
