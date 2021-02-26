import { Injectable, TemplateRef } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ToastService {
    // Declaration State
    toasts: any[] = [];

    /**
     * Show Toastr
     * @param message
     * @param options
     */
    show(message: string | TemplateRef<any>, options: any = {}) {
        this.toasts.push({ message, ...options });
    }

    /**
     * Close
     * @param toastId
     */
    remove(toastId) {
        this.toasts = this.toasts.filter(
            t => t !== toastId
        );
    }
}