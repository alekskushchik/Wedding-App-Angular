import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn:'root'})
export class PostDataService {
  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net/app/api/v1/user/login';

  constructor(private http: HttpClient) {}

  postData(f){
    const body = {email: f.email, password: f.password};
    console.log(f.email)

    return this.http.post(this.baseUrl, body);
  }

}
