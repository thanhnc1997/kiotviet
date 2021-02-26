import { Component, ViewEncapsulation, OnInit } from '@angular/core';

// Modules
import { ModalService } from 'src/app/common/services';

@Component({
    templateUrl: './make-recipt.component.html',
    encapsulation: ViewEncapsulation.None
})
export class MakeReciptComponent implements OnInit {
    constructor(
        private modalService: ModalService,
    ) { }

    ngOnInit() { }

    onClose() {
        this.modalService.close(MakeReciptComponent);
    }

    onCreate() { }

    onCreateAndPrint() { }
}
