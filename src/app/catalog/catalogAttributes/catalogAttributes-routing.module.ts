import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogAttributesComponent } from './catalogAttributes.component';

const routes: Routes = [
    {
        path: '', 
        component: CatalogAttributesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CatalogAttributesRoutingModule {
}
