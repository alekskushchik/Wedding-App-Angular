import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SectionData} from '../../interfaces/interfaces';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  token: any;
  heroSection;
  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  constructor(private dataService: DataService, private httpClient: HttpClient) {
    this.heroSection = this.dataService.heroSection;
  }

  ngOnInit() {
    this.dataService.token.subscribe(token => this.token = token);
  }

  update() {
    console.log(this.heroSection);

    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json; charset=utf-8',
    //   Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user-token'))
    // });
    this.httpClient.put('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/info', this.heroSection)
      .subscribe((res) => {
        console.log(res);
      });

    // this.httpClient.get(`${this.baseUrl}/app/api/v1/section`).subscribe(res => {
    //   console.log(res);
    // });
  }
}
