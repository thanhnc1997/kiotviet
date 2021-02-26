import { Injectable } from '@angular/core';
import { NgbModalRef, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class ModalService {
    private modals: any[] = [];
    private modalRef: NgbModalRef;

    constructor(
        private modalService: NgbModal,
    ) { }

    /**
     * Show modal
     * @param {*} component
     * @param {*} options
     */
    open(component: any, options: NgbModalOptions) {
        // Check modal exist
        const modal = this.modals.find(
            x => x.component === component
        );
        if (modal) {
            // remove modal from array of active modals
            this.modals = this.modals.filter(
                x => x.component !== component
            );
        }

        // Add modal
        this.modalRef = this.modalService.open(
            component,
            options
        );
        this.modals.push({
            component: component,
            modalRef: this.modalRef
        });

        return this.modalRef;
    }

    close(component: any) {
        // Close modal
        const modal = this.modals.find(
            x => x.component === component
        );
        if (modal) {
            const modalRef = modal.modalRef as NgbModalRef;
            modalRef.close(); // close modal when exist

            // remove modal from list modal
            this.modals = this.modals.filter(
                x => x.component !== component
            );
        }
    }
}
