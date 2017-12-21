import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { SecuredComponent } from './secured/secured.component';
import { UnsecuredComponent } from './unsecured/unsecured.component';
import { AuthService } from './shared/services/auth.service';
const routes: Routes = [
    //{ path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] }, //jacob-
    //{ path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    //{ path: 'catalogattributes',  loadChildren: './catalog/catalogAttributes/catalogAttributes.module#CatalogAttributesModule'},
    /*
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
    */

    {
        path: '',
        redirectTo: '/secured',
        pathMatch: 'full'
    },
    {
        path: 'secured',
        loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard]
    },
    {
        path: 'unsecured',
        component: UnsecuredComponent
    }
];
export const authProviders = [
    AuthGuard,
    AuthService
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true }) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
