import { NgModule} from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

//import { SharedModule } from '../../shared/shared.module';
import {CatalogAttributesRoutingModule} from './catalogAttributes-routing.module';
import { CatalogAttributesComponent } from './catalogAttributes.component';
import { CatalogAttributesService } from './catalogAttributes.service';
//import { Pager } from '../shared/components/pager/pager';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CADetailComponent } from './ca-detail.component';

@NgModule({  
    imports: [
        //BrowserModule,
        ReactiveFormsModule,
        CommonModule,
        CatalogAttributesRoutingModule
    ],
    declarations: [
        CatalogAttributesComponent,
        CADetailComponent
    ],
    exports: [CatalogAttributesComponent],
    providers: [CatalogAttributesService]
})

export class CatalogAttributesModule { }