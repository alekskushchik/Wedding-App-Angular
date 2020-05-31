import { Component, OnInit } from '@angular/core';
import { GetDataService } from "../../services/get-data.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  servicesSection;

  constructor(private getDataService: GetDataService) {
    this.servicesSection = this.getDataService.servicesSection;
  }

  ngOnInit(): void {
  }
}
