import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/services/data.service';
//import { SecurityService } from './shared/services/security.service';
import { ConfigurationService } from './shared/services/configuration.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor( private configurationService: ConfigurationService) {
        
     }

     ngOnInit() {
        //console.log('-------------------------app on init-------------------------');
        //this.subscription = this.securityService.authenticationChallenge$.subscribe(res => this.Authenticated = res);

        //Get configuration from server environment variables:
       // console.log('--------------------------configurationload--------------------------');
        this.configurationService.load();
    }
}
