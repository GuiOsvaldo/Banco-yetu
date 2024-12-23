import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard',
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Menus',
                items: [
                    { label: 'Multicaixa', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/formlayout'] },
                    { label: 'Contas', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/input'] },
                    { label: 'Créditos', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    { label: 'Agências', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    { label: 'Poupanças', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
                 
                ]
            },
            {
                label: 'Redes',
                items: [
                    { label: 'Seguros', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
                    { label: 'Cartões', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
                ]
            },
           
        ];
    }
}
