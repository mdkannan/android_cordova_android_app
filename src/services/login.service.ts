import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public http: HttpClient) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  loginInfo(username, pwd) {
    const data: object = {
      'username': username,
      'password': pwd
    };
           const body = JSON.stringify(data);
          return this.http.post('http://172.20.74.248:8080/SpringMVCHibernate/authenticate', body);
  }
}
