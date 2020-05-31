import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SectionData } from '../interfaces/interfaces';


@Injectable()
export class GetDataService {

  constructor(private httpClient: HttpClient) {}
  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  public navigationSection;
  public heroSection;
  public offersSection;
  public servicesSection;
  public coachesSection;

  getSectionsData(): Observable<SectionData> {
    return this.httpClient.get<SectionData>(`${this.baseUrl}/app/api/v1/section`);
  }
}
