import {Component, OnInit} from '@angular/core';
import {GetDataService} from './services/get-data.service';
import {SectionContent} from './interfaces/interfaces';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private sectionSub: Subscription;
  private sectionContent: SectionContent;
  private isLoading: boolean;

  constructor(private getDataService: GetDataService) {
  }

  ngOnInit() {
    this.getSectionsData();
  }

  private getSectionsData(): void {
    this.isLoading = true;
    this.sectionSub = <Subscription> this.getDataService.getSectionsData()
      .subscribe( (data: SectionContent) => {
        this.sectionContent = data;
        this.isLoading = false;
      });
  }
}
