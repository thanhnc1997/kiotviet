import { Component, OnInit } from '@angular/core';

// Modules
import { Utilities } from 'src/app/common/helpers';
import { ModalService } from 'src/app/common/services';

// Components
import { PrintComponent } from './header/components/print/print.component';
import { SyncDataComponent } from './header/components/sync-data/sync-data.component';
import { MakeReciptComponent } from './header/components/make-recipt/make-recipt.component';
import { OrderListComponent } from './header/components/order-list/order-list.component';
import { ReturnCreateComponent } from './header/components/return-create/return-create.component';
import { PaymentMethodComponent } from './header/components/payment-method/payment-method.component';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    constructor(
        private utilities: Utilities,
        private modalService: ModalService,
    ) { }

    ngOnInit() {
        this.utilities.setLoading(false);
    }

    onCheckOut() { }

    onCreateOrder() { }

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

    openPaymentMethod() {
        let modalRef: any;
        modalRef = this.modalService.open(PaymentMethodComponent, { size: 'md' });
        return modalRef;
    }
}
