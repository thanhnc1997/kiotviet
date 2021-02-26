import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { LoginComponent } from './login/login.component';
import { PartialsModule } from 'src/app/view/partials/partials.module';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        PartialsModule,

        // Routes
        RouterModule.forChild([
            {
                path: 'login',
                component: LoginComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class AuthModule { }
