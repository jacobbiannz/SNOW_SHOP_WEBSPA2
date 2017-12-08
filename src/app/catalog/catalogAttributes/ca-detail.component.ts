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
            this.name = this.category.name;
            this.id = this.category.id;
        }
        else
        {
           
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
        this.category = this.prepareSaveCategory();
        //this.service.updateCategory(this.category).subscribe(/* error handling */);
        if(this.category != null){
            this.service.updateCategory(this.prepareSaveCategory()).subscribe(
                category => {
                    this.onUpdate.emit(); 
                }
            );           
        }        

        else{
            this.service.createCategory(this.prepareSaveCategory()).subscribe();
        }
        
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