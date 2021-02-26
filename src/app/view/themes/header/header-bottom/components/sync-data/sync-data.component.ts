import { Component, ViewEncapsulation, OnInit } from '@angular/core';

// Modules
import { ModalService } from 'src/app/common/services';

@Component({
    templateUrl: './sync-data.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SyncDataComponent implements OnInit {
    constructor(
        private modalService: ModalService,
    ) { }

    ngOnInit() { }

    onClose() {
        this.modalService.close(SyncDataComponent);
    }
}
