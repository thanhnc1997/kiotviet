// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PartialsModule } from '../partials/partials.module';

// Components
import { LayoutComponent } from './layout/layout.component';

@NgModule({
    declarations: [
        LayoutComponent
    ],
    exports: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        PartialsModule,

        NgbDropdownModule
    ]
})

export class ThemeModule { }
