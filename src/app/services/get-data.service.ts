import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SectionData } from '../interfaces/interfaces';

@Injectable()
export class GetDataService {
  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  public navigationSection;
  public heroSection;
  public offersSection;
  public servicesSection;
  public coachesSection;

  constructor(private httpClient: HttpClient) {}

  getSectionsData(): Observable<SectionData> {
    return this.httpClient.get<SectionData>(`${this.baseUrl}/app/api/v1/section`);
  }
}
