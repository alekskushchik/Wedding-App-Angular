import {Component, OnInit, OnDestroy} from '@angular/core';
import {DataService} from './services/data.service';
import {Subscription} from 'rxjs';
import {SectionData} from './interfaces/interfaces';
import {Section} from './interfaces/interfaces';

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

  constructor(private getDataService: DataService) {
  }

  ngOnInit(): void {
    this.getSection();
  }

  ngOnDestroy(): void {
    this.sectionSub.unsubscribe();
  }

  getSection(): void {
    this.isLoading = true;
    this.sectionSub = <Subscription> this.getDataService.getSectionsData()
      .subscribe((data: SectionData) => {
        this.sectionData = data;
        console.log(data);
        this.sectionArr = data.content;
        this.getDataService.navigationSection = this.navigationSection = this.sectionArr.find(el => el.type === 'navigation');
        this.getDataService.heroSection = this.heroSection = this.sectionArr.find(el => el.type === 'info');
        this.getDataService.offersSection = this.offersSection = this.sectionArr.find(el => el.type === 'offer');
        this.getDataService.servicesSection = this.servicesSection = this.sectionArr.find(el => el.type === 'service');
        this.getDataService.coachesSection = this.coachesSection = this.sectionArr.find(el => el.type === 'coach');
        this.isLoading = false;
      });
  }
}
