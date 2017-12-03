import { Component, Input, OnChanges} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ICatalogCategory } from '../../shared/models/catalogCategory.model';
import { CatalogAttributesService } from './catalogAttributes.service';

@Component({
    selector: 'ca-detail',
    styleUrls: ['./ca-detail.component.scss'],
    templateUrl: './ca-detail.component.html'
})

export class CADetailComponent implements OnChanges {
    @Input() category: ICatalogCategory;

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
        this.categoryForm.reset({
            name: this.category.name
        });
    }

    onSubmit() {
        this.category = this.prepareSaveCategory();
       
        this.service.updateCategory(this.category).subscribe(/* error handling */);
        this.ngOnChanges();
    }

    prepareSaveCategory(): ICatalogCategory {
        const formModel = this.categoryForm.value;
        // return new `Hero` object containing a combination of original hero value(s)
        // and deep copies of changed form model values
        const saveCategory: ICatalogCategory = {
            id: this.category.id,
            name: formModel.name as string,
            company: '',
            allProducts: ''
            // addresses: formModel.secretLairs // <-- bad!
        };
        return saveCategory;
    }

    revert() { this.ngOnChanges(); }

}