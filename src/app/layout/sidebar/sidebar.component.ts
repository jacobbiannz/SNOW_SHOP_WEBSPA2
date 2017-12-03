import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive: boolean = false;
    showMenu: string = '';

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}



/*
import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'fa fa-fw fa-dashboard', class: '' },
    { path: 'catalogattributes', title: 'Catalog Settings', icon: 'fa fa-fw fa-cog', class: '' },

    { path: 'user-profile', title: 'User Profile', icon: 'fa fa-fw fa-file-o', class: '' },
    { path: 'table-list', title: 'Table List', icon: 'fa fa-fw fa-table', class: '' },
    { path: 'typography', title: 'Typography', icon: 'fa fa-fw fa-file-o', class: '' },
    { path: 'icons', title: 'Icons', icon: 'fa fa-fw fa-file-o', class: '' },
    { path: 'maps', title: 'Maps', icon: 'fa fa-fw fa-file-o', class: '' },
    { path: 'notifications', title: 'Notifications', icon: 'fa fa-fw fa-file-o', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO', icon: 'fa fa-fw fa-file-o', class: 'active-pro' },
];


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent {
    isActive: boolean = false;
    showMenu: string = '';
    
    eventCalled() {
        this.isActive = !this.isActive;
        
    }

    addExpandClass(element: any) {
       
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
    
}
*/
/*
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() { }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
   
    isActive: boolean = false;
    showMenu: string = '';

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
*/