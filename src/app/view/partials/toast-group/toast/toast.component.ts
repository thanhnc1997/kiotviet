import { Component, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/common/services';



@Component({
    selector: 'app-toast-container',
    templateUrl: './toast.component.html',
    // tslint:disable-next-line: no-host-metadata-property
    host: { '[class.ngb-toasts]': 'true' }
})
export class ToastComponent {
    constructor(
        public toastService: ToastService
    ) { }

    isTemplate(toastId) {
        return toastId.message instanceof TemplateRef;
    }
}
