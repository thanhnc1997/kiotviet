import { Component, ViewEncapsulation, OnInit } from '@angular/core';

// Modules
import { ModalService } from 'src/app/common/services';

@Component({
    templateUrl: './payment-method.component.html',
    encapsulation: ViewEncapsulation.None
})
export class PaymentMethodComponent implements OnInit {
    constructor(
        private modalService: ModalService,
    ) { }

    ngOnInit() { }

    onClose() {
        this.modalService.close(PaymentMethodComponent);
    }
}
