import {Component, OnInit} from '@angular/core';
import {GetDataService} from '../../services/get-data.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

 heroSection;
  constructor(private getDataService: GetDataService) {
    this.heroSection = this.getDataService.heroSection;
  }
  ngOnInit() {
  }
}
