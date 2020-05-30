import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SectionContent } from '../interfaces/interfaces';

@Injectable()
export class GetDataService {

  constructor(private httpClient: HttpClient) {}
  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  getSectionsData(): Observable<SectionContent> {
    return this.httpClient.get<SectionContent>(`${this.baseUrl}/app/api/v1/section/offer`);
  }
}
