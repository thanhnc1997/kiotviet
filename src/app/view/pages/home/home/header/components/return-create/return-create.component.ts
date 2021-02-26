import { Component, ViewEncapsulation, OnInit } from '@angular/core';

// Modules
import { ModalService } from 'src/app/common/services';

@Component({
    templateUrl: './return-create.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ReturnCreateComponent implements OnInit {
    constructor(
        private modalService: ModalService,
    ) { }

    ngOnInit() { }

    onClose() {
        this.modalService.close(ReturnCreateComponent);
    }

    onSubmit() { }
}
