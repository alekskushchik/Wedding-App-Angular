import { Component, OnInit } from '@angular/core';
import {GetDataService} from "../../services/get-data.service";

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  public navigationSection;
  public items;

  constructor(private getDataService: GetDataService) {
    this.navigationSection = this.getDataService.navigationSection;
    this.items = this.navigationSection.content;
  }

  ngOnInit(): void {
  }
}
