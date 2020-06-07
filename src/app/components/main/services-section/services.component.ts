import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../shared/http.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  servicesSection;

  constructor(private getDataService: HttpService) {
    this.servicesSection = this.getDataService.servicesSection;
  }

  ngOnInit(): void {
  }
}
