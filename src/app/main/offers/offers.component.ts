import { Component, OnInit } from '@angular/core';
import {GetDataService} from '../../services/get-data.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  public offersSection;
  public items;
  constructor(private getDataService: GetDataService) {
    this.offersSection = this.getDataService.offersSection;
    this.items = this.offersSection.content;
  }

  ngOnInit(): void {
  }

}
