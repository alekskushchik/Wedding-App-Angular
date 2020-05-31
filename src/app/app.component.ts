import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetDataService } from './services/get-data.service';
import { Subscription } from 'rxjs';
import { SectionData } from './interfaces/interfaces';
import { Section } from './interfaces/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public sectionSub: Subscription;
  public isLoading: boolean;
  public sectionData: SectionData;
  public sectionArr: Section[];
  public navigationSection: Section;
  public heroSection: Section;
  public offersSection: Section;
  public servicesSection: Section;
  public coachesSection: Section;

  constructor(private getDataService: GetDataService) {
  }

  ngOnInit(): void {
    this.getSection();
  }

  ngOnDestroy():void {
    this.sectionSub.unsubscribe()
  }

  getSection(): void {
    this.isLoading = true;
    this.sectionSub = <Subscription> this.getDataService.getSectionsData()
      .subscribe((data: SectionData) => {
        this.sectionData = data;
        this.sectionArr = data.content;
        this.navigationSection = this.sectionArr.find( el => el.type === 'navigation')
        this.heroSection = this.sectionArr.find(el => el.type === 'info');
        this.offersSection = this.sectionArr.find(el => el.type === 'offer');
        this.servicesSection = this.sectionArr.find(el => el.type === 'service');
        this.coachesSection = this.sectionArr.find(el => el.type === 'coach');

        this.getDataService.navigationSection = this.navigationSection;
        this.getDataService.heroSection = this.heroSection;
        this.getDataService.offersSection = this.offersSection;
        this.getDataService.servicesSection = this.servicesSection;
        this.getDataService.coachesSection = this.coachesSection;

        this.isLoading = false;
      });
  }
}
