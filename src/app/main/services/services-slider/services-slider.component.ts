import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {GetDataService} from "../../../services/get-data.service";


@Component({
  selector: 'app-services-slider',
  templateUrl: './services-slider.component.html',
  styleUrls: ['./services-slider.component.scss']
})
export class ServicesSliderComponent implements OnInit {
  public servicesSection;
  public items;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: false
  };

  constructor(private getDataService: GetDataService) {
    this.servicesSection = this.getDataService.servicesSection;
    this.items = this.servicesSection.content;
  }

  ngOnInit(): void {
  }

}
