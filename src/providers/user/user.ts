import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public httpClient: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  public Get(user){
     console.log(`Get user ${user}`);
    //  this.httpClient.get("http://127.0.0.1:3000/User);
  }

  public Put(user){
     console.log(`Put user ${user}`);
  }

  public Post(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    this.httpClient.get('http://127.0.0.1:3000/User');

    console.log(`Post user ${user}`);
    this.httpClient.post("http://127.0.0.1:3000/User", JSON.stringify(user), {headers}).subscribe(data => {
      console.log(data['_body']);
     }, error => {
      console.log(error);
    });;
  }

  public Delete(user){
     console.log(`Delete user ${user}`);
  }
}
