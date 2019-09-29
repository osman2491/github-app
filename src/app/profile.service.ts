import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = '019f192e0661f3dc5c0e';
  private clientsecret = '6ad0a191f527d47e37a5d0625908b60c9b40c0d4';

  constructor(private http:Http) {
    console.log("services is ready");
    this.username = 'osman2491';
   }

   getProfileInfo(){
     return this.http.get("https://api.github.com/users/osman2491", + this.username + "?client_id=" + this.
     clientid +"&client_secret=" + this.clientsecret)
     .map(res => res.json());

   }
}
