import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Component
import { HomeComponent } from './home/home.component';
@NgModule({
    declarations: [HomeComponent],
    imports: [
        NgbModule,
        CommonModule,
        NgbNavModule,
        NgSelectModule,
        NgxDatatableModule,

        // routes
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent
            }
        ])
    ]
})

export class HomeModule { }
