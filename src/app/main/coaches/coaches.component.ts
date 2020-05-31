import { Component, OnInit } from '@angular/core';
import { GetDataService } from "../../services/get-data.service";

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  coachesSection;

  constructor(private getDataService: GetDataService) {
    this.coachesSection = this.getDataService.coachesSection;
  }

  ngOnInit(): void {
  }

}
