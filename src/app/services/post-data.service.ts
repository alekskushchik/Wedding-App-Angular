import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PostDataService {
  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/user/login';

  constructor() {}


}
