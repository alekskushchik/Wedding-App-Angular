import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../../../shared/http.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  token: any;
  heroSection;
  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  constructor(private dataService: HttpService, private httpClient: HttpClient, private toastr: ToastrService) {
    this.heroSection = this.dataService.heroSection;
  }

  ngOnInit() {
    this.dataService.token.subscribe(token => this.token = token);
  }

  showWarning() {
    this.toastr.show('', 'You\'ve just edited section.', {
      timeOut: 2000
    });
  }

  update() {
    console.log(this.heroSection);

    this.httpClient.put('https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/section/info', this.heroSection)
      .subscribe((res) => {
        console.log(res);
      });
    this.showWarning();
  }
}
