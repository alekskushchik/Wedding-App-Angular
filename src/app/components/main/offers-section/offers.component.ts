import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../shared/http.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  public offersSection;
  public items;
  constructor(private getDataService: HttpService) {
    this.offersSection = this.getDataService.offersSection;
    this.items = this.offersSection.content;
  }

  ngOnInit(): void {
  }

}
