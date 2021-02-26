import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Modules
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// Components
import { ToastComponent } from './toast-group/toast/toast.component';

@NgModule({
    declarations: [
        ToastComponent
    ],
    exports: [
        ToastComponent
    ],
    imports: [
        CommonModule,
        FormsModule,

        // ng module
        NgSelectModule,
        NgbToastModule,
        NgxDatatableModule,
        CKEditorModule
    ]
})

export class PartialsModule { }
