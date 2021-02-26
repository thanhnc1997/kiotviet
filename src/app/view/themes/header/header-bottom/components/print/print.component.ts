import { Component, ViewEncapsulation, OnInit } from '@angular/core';

// Modules
import { ModalService } from 'src/app/common/services';

@Component({
    templateUrl: './print.component.html',
    encapsulation: ViewEncapsulation.None
})
export class PrintComponent implements OnInit {
    constructor(
        private modalService: ModalService,
    ) { }

    ngOnInit() { }

    onClose() {
        this.modalService.close(PrintComponent);
    }
}
