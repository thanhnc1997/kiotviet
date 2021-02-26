import { Component, OnInit } from '@angular/core';
import { Utilities } from 'src/app/common/helpers';

// Modules
import { LayoutService } from 'src/app/common/services';
import { ModalService } from 'src/app/common/services';
import { DynamicMenuConfig } from 'src/app/config/dynamic-menu.config';

// Components
import { PrintComponent } from './components/print/print.component';
import { SyncDataComponent } from './components/sync-data/sync-data.component';
import { MakeReciptComponent } from './components/make-recipt/make-recipt.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { ReturnCreateComponent } from './components/return-create/return-create.component';

@Component({
    selector: 'c-header-bottom',
    templateUrl: './header-bottom.component.html',
    providers: [
        LayoutService
    ]
})

export class HeaderBottomComponent implements OnInit {
    // Declaration State
    menuConfig = DynamicMenuConfig.items;
    configurableCurrentStore: any = {};
    configurableAccount: any = {};
    configurableStores: any = [];

    constructor(
        private utilities: Utilities,
        private layoutService: LayoutService,
        private modalService: ModalService,
    ) { }

    ngOnInit(): void {
        this.configurableAccount = this.layoutService.getUser();
        this.configurableStores = this.layoutService.listStore();
        this.configurableCurrentStore = this.layoutService.getCurrentStore();
    }

    /**
     * Change Store
     * @param {*} store
     */
    onChangeCurrentStore(store: any = {}) {
        try {
            // TODO:: Check Store Is Active
            this.layoutService.changeCurrentStore(store)
            window.location.reload();
        } catch (error) {
            throw Error(error);
        }
    }

    /**
     * Sign out
     * @param {*} clear
     */
    onSignOut() {
        try {
            this.utilities.setLoading(true);
            this.layoutService.resetConfig();
            window.location.href = '/auth/login';
            return true;
        } catch (error) {
            throw Error(error);
        }
    }

    openPrintModal() {
        let modalRef: any;
        modalRef = this.modalService.open(PrintComponent, { size: 'sm' });
        return modalRef;
    }

    openReturnCreateModal() {
        let modalRef: any;
        modalRef = this.modalService.open(ReturnCreateComponent, { size: 'xl' });
        return modalRef;
    }

    openSyncDataModal() {
        let modalRef: any;
        modalRef = this.modalService.open(SyncDataComponent, { size: 'lg' });
        return modalRef;
    }

    openOrderListModal() {
        let modalRef: any;
        modalRef = this.modalService.open(OrderListComponent, { size: 'xl' });
        return modalRef;
    }

    openMakeRecipt() {
        let modalRef: any;
        modalRef = this.modalService.open(MakeReciptComponent, { size: 'lg' });
        return modalRef;
    }
}
