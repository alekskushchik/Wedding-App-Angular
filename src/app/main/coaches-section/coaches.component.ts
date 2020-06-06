import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  coachesSection;

  constructor(private getDataService: DataService) {
    this.coachesSection = this.getDataService.coachesSection;
  }

  ngOnInit(): void {
  }

}
