import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { DataService } from '../../shared/services/data.service';
import { ConfigurationService } from '../../shared/services/configuration.service';
//import { ICatalogBrand } from '../shared/models/catalogBrand.model';
import { ICatalogCategory } from '../../shared/models/catalogCategory.model';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogAttributesService {
    //private catalogUrl: string = '';
    //private brandUrl: string = '';
    
    private categoryUrl: string = '';
    category: ICatalogCategory;

    constructor(private service: DataService, private configurationService: ConfigurationService) {
        //this.configurationService.settingsLoaded$.subscribe(x => {
            //this.catalogUrl = this.configurationService.serverSettings.catalogUrl + '/api/v1/catalog/items';
            //this.brandUrl = this.configurationService.serverSettings.catalogUrl + '/api/v1/catalog/catalogbrands';
            //this.categoryUrl = this.configurationService.serverSettings.catalogAttributesUrl + '/api/category/categories';
            this.categoryUrl = 'http://localhost:53423/api/category/categories';
            
        //});
        
    }
   
    /*
    getBrands(): Observable<ICatalogBrand[]> {
        return this.service.get(this.brandUrl).map((response: Response) => {
            return response.json();
        });
    }
    */

    getCategories(): Observable<ICatalogCategory[]> {
        //console.log("----------------------------categoryUrl" + this.categoryUrl + "//////--------------------");

        return this.service.get(this.categoryUrl)
            .map((response: Response) => {
                //console.log("----------------------------categoryjson---" + response.json()['model'] + "//////--------------------");
                //return response.json()['model'];
                return response.json();
            })
            .catch(this.handleError);
            
    };

    updateCategory(category: any): Observable<boolean> {
        let url = "http://localhost:53423/api/category/updatecategory";
        this.category = category;
        
        //console.log(this.category);
        //console.log(JSON.stringify(category));
        return this.service.putWithId(url, category).map((response: Response) => {
            return true;
        });
    }

    private handleError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
