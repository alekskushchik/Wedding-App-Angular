import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  servicesSection;

  constructor(private getDataService: DataService) {
    this.servicesSection = this.getDataService.servicesSection;
  }

  ngOnInit(): void {
  }
}
