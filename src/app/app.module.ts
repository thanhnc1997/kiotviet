import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Modules
import { AuthGuard } from './common/guards/auth.guard';
import { ThemeModule } from './view/themes/themes.module';
import { PartialsModule } from './view/partials/partials.module';

// Service
import { HttpUtilities, Utilities, TypesUtilities } from './common/helpers';
import { ModalService, ToastService, UploadService } from './common/services';

// Components
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        // Angular Module
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,

        // Base Module
        PartialsModule,
        ThemeModule,
    ],
    providers: [
        AuthGuard,
        Utilities,
        HttpUtilities,
        TypesUtilities,

        // service
        ModalService,
        ToastService,
        UploadService,
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
