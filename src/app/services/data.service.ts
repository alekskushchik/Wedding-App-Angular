import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SectionData} from '../interfaces/interfaces';
import {LoginData} from '../interfaces/interfaces';
import {UserToken} from '../interfaces/interfaces';

import {delay} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataService {

  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net';
  public navigationSection;
  public heroSection;
  public offersSection;
  public servicesSection;
  public coachesSection;

  constructor(private httpClient: HttpClient) {}

  public getSectionsData(): Observable<SectionData> {
    return this.httpClient.get<SectionData>(`${this.baseUrl}/app/api/v1/section`)
      .pipe(delay(1500));
  }

  public userLogin(loginData: LoginData): Observable<UserToken> {
    const body = JSON.stringify(loginData);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json; charset=utf-8'
    );
    return this.httpClient.post<UserToken>(
      `${this.baseUrl}/app/api/v1/user/login`, body, { headers: headers, responseType: 'json' }
    );
  }
}
