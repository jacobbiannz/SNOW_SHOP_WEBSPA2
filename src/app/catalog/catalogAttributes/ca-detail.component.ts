import { Component, Input, Output, OnChanges, EventEmitter} from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { ICatalogCategory } from '../../shared/models/catalogCategory.model';
import { CatalogAttributesService } from './catalogAttributes.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'ca-detail',
    styleUrls: ['./ca-detail.component.scss'],
    templateUrl: './ca-detail.component.html'
})

export class CADetailComponent implements OnChanges {
    @Input() category: ICatalogCategory;
    @Output() onUpdate = new EventEmitter<ICatalogCategory>();
    
    name : string;
    id : number;

    load(){
        if(this.category != null){
            console.log("------------------------------here 1------------------------");
            this.name = this.category.name;
            this.id = this.category.id;
        }
        else
        {
            this.name = "";
            this.id = 0;
            console.log("------------------------------here 2------------------------" + this.name );
        }
    }
    categoryForm: FormGroup; // <--- heroForm is of type FormGroup

    constructor(private service: CatalogAttributesService, private fb: FormBuilder) { // <--- inject FormBuilder
        this.createForm();
    }

    createForm() {
        this.categoryForm = this.fb.group({
            name:''
        });
    }

    ngOnChanges() {
        this.load();
        this.categoryForm.reset({ 
            name: this.name
        });
        
    }

    onSubmit() {
        //this.category = this.prepareSaveCategory();
        
        if(this.category != null){
            console.log("---------------------here here1 09/12----------------------");
            this.service.updateCategory(this.prepareSaveCategory()).subscribe(
                category => {
                    this.onUpdate.emit(); 
                }
            );           
        }        

        else{
            console.log("---------------------here here 09/12----------------------");
            this.service.createCategory(this.prepareSaveCategory()).subscribe(
                category => {
                    this.onUpdate.emit(); 
                }
            );
        }
        
        this.category = this.prepareSaveCategory();
        this.ngOnChanges(); 
    }

    prepareSaveCategory(): ICatalogCategory {
        const formModel = this.categoryForm.value;
        // return new `Hero` object containing a combination of original hero value(s)
        // and deep copies of changed form model values
    

        const saveCategory: ICatalogCategory = {
            id: this.id,
            name: formModel.name as string,
            //company: '',
            //allProducts: ''
            // addresses: formModel.secretLairs // <-- bad!
        };
        return saveCategory;
    }

    revert() { this.ngOnChanges(); }

}