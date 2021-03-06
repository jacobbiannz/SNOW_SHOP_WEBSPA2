import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthService } from '../shared/services/auth.service';
import { AuthGuard } from '../shared';
const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        
        children: [
            { path: '',  redirectTo : 'dashboard' , pathMatch: 'full' },
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'catalogattributes',  loadChildren: '../catalog/catalogAttributes/catalogAttributes.module#CatalogAttributesModule' },
            
            /*
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
            */
        ]
    },
];
export const authProviders = [
    AuthGuard,
    AuthService
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
