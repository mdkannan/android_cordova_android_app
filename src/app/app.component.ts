import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // https://medium.com/@nacojohn/convert-your-angular-project-to-mobile-app-using-cordova-f0384a7711a6
  title = 'hello-world-app';
  loginflag: boolean = false;

  constructor(private router: Router, public loginService: LoginService) {
  }

  ngOnInit() {
    document.addEventListener('deviceready', function () {
      alert(device.platform);
    }, false);
  }

  btnLoginclick(): void {
    this.loginflag = true;
    this.loginService.getPosts().subscribe((posts) => {
       console.log(posts);
      this.router.navigateByUrl('/workorder');
    });
  }

  btnLoginclick1(username, password): void {
    this.loginService.loginInfo(username, password).subscribe((posts) => {
      console.log(posts);
      this.loginflag = true;
      this.router.navigateByUrl('/workorder');
    });
  }
}

