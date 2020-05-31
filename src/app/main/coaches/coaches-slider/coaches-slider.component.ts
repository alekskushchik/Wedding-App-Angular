import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GetDataService } from "../../../services/get-data.service";

@Component({
  selector: 'app-coaches-slider',
  templateUrl: './coaches-slider.component.html',
  styleUrls: ['./coaches-slider.component.scss']
})
export class CoachesSliderComponent implements OnInit {
  public coachesSection;
  public items;
  public length;

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
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: false
  };

  constructor(private getDataService: GetDataService) {
    this.coachesSection = this.getDataService.coachesSection;
    this.items = this.coachesSection.content;
    this.length = this.coachesSection.content.length
  }

  ngOnInit(): void {
  }

}
