import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../../shared/http.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  coachesSection;

  constructor(private getDataService: HttpService) {
    this.coachesSection = this.getDataService.coachesSection;
  }

  ngOnInit(): void {
  }

}
