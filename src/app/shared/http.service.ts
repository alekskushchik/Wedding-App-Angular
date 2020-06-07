import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {SectionData} from './interfaces';
import {LoginData} from './interfaces';
import {UserToken} from './interfaces';
import {ToastrService} from 'ngx-toastr';

import {delay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HttpService {
  private tokenSource = new BehaviorSubject(JSON.parse(localStorage.getItem('user-token')) || null);
  public token = this.tokenSource.asObservable();

  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net';
  public navigationSection;
  public heroSection;
  public offersSection;
  public servicesSection;
  public coachesSection;

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {
  }

  public getSectionsData(): Observable<SectionData> {
    return this.httpClient.get<SectionData>(`${this.baseUrl}/app/api/v1/section`)
      .pipe(delay(1500));
  }

  public userLogin(loginData: LoginData): Observable<UserToken> {
    const body = JSON.stringify(loginData);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
    return this.httpClient.post<UserToken>(`${this.baseUrl}/app/api/v1/user/login`, body, {
      headers, responseType: 'json'
    });
  }

  showInfo() {
    this.toastr.show('', 'You\'ve just log out from the edit mode.', {
      easing: 'ease-in',
      easeTime: 500,
      timeOut: 2000
    });
  }

  public updateToken(token) {
    localStorage.setItem('user-token', JSON.stringify(token));
    this.tokenSource.next(token);
  }
}
