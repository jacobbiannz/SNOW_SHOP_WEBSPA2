import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CatalogAttributesService } from './catalogAttributes.service';
import { ConfigurationService } from '../../shared/services/configuration.service';
import { ICatalogCategory } from '../../shared/models/catalogCategory.model';

//import { SecurityService } from '../shared/services/security.service';
import { Observable } from 'rxjs/Observable';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'catalogAttributes',
    styleUrls: ['./catalogAttributes.component.scss'],
    templateUrl: './catalogAttributes.component.html',
    animations: [routerTransition()]
})

export class CatalogAttributesComponent implements OnInit {
    categories: ICatalogCategory[];
    selectedCategory: ICatalogCategory;
   
    //authenticated: boolean = false;
    //authSubscription: Subscription;
    errorReceived: boolean;

    /*
    constructor(private service: CatalogCategoryService, private basketService: BasketWrapperService, private configurationService: ConfigurationService, private securityService: SecurityService) {
        this.authenticated = securityService.IsAuthorized;
    }
    */

    constructor(private service: CatalogAttributesService,
        private configurationService: ConfigurationService
        //private securityService: SecurityService
        ) {
        //this.authenticated = securityService.IsAuthorized;
        }
   
    ngOnInit() {
        
        // Configuration Settings:
        if (this.configurationService.isReady)
            {
                this.loadData();
              
            }   
        //else
            //this.configurationService.settingsLoaded$.subscribe(x => {
            //    this.loadData();
            //});
       

        /*
        // Subscribe to login and logout observable
        this.authSubscription = this.securityService.authenticationChallenge$.subscribe(res => {
            this.authenticated = res;
        });
        */
        
    }

    loadData() {
        this.getCategories();
    }

    getCategories() {
        this.service.getCategories().subscribe(categories => {
            this.categories = categories;
            let allCategories = { id: 0, name: 'All', company: '', allProducts :'' };
            this.categories.unshift(allCategories);
        });
    }

    select(category: ICatalogCategory) { this.selectedCategory = category; }

    private handleError(error: any) {
        this.errorReceived = true;
        return Observable.throw(error);
    }
}

