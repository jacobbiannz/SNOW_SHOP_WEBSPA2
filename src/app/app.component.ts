import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/services/data.service';
//import { SecurityService } from './shared/services/security.service';
import { ConfigurationService } from './shared/services/configuration.service';

import {AuthService} from './shared/services/auth.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    loggedIn: Boolean;
    constructor( private configurationService: ConfigurationService,private authService: AuthService) {
        this.authService.isLoggedInObs()
        .subscribe(flag => {
          this.loggedIn = flag;
          if (!flag) {
            this.authService.startSigninMainWindow();
          }
        });
     }

     ngOnInit() {
        //console.log('-------------------------app on init-------------------------');
        //this.subscription = this.securityService.authenticationChallenge$.subscribe(res => this.Authenticated = res);

        //Get configuration from server environment variables:
       // console.log('--------------------------configurationload--------------------------');
        this.configurationService.load();
    }
    login() {
        this.authService.startSigninMainWindow();
      }
    
      logout() {
        this.authService.startSignoutMainWindow();
      }
}
