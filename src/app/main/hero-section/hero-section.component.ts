import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

 heroSection;
  constructor(private getDataService: DataService) {
    this.heroSection = this.getDataService.heroSection;
  }
  ngOnInit() {
  }
}
