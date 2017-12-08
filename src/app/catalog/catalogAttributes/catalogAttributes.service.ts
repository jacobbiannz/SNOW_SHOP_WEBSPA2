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
    delayMs = 500;


    constructor(private service: DataService, private configurationService: ConfigurationService) {
        //this.configurationService.settingsLoaded$.subscribe(x => {
            //this.catalogUrl = this.configurationService.serverSettings.catalogUrl + '/api/v1/catalog/items';
            //this.brandUrl = this.configurationService.serverSettings.catalogUrl + '/api/v1/catalog/catalogbrands';
            //this.categoryUrl = this.configurationService.serverSettings.catalogAttributesUrl + '/api/category/categories';
            this.categoryUrl = 'http://localhost:53423/api/category/categories';
            
        //});
        
    }
   
    getCategories(): Observable<ICatalogCategory[]> {
        //console.log("----------------------------categoryUrl" + this.categoryUrl + "//////--------------------");

        return this.service.get('http://localhost:53423/api/category/categories')
            .map((response: Response) => {
                //console.log("----------------------------categoryjson---" + response.json()['model'] + "//////--------------------");
                //return response.json()['model'];
                return response.json();
            })        
    }

    updateCategory(category: ICatalogCategory): Observable<ICatalogCategory> {
        let url = "http://localhost:53423/api/category/updatecategory";
        //this.category = category;
        return this.service.putWithId(url, category).map((response: Response) => {
            return response.json();
        });
       
    }

    createCategory(category: any): Observable<boolean> {
        let url = "http://localhost:53423/api/Category/CreateCategory";
        this.category = category;
        
        return this.service.post(url, category).map((response: Response) => {
            return true;
        });
    }
}
