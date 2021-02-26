// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Authorize
import { AuthGuard } from './common/guards/auth.guard';

// Components
import { LayoutComponent } from './view/themes/layout/layout.component';


const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./view/pages/auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('./view/pages/home/home.module').then(m => m.HomeModule),
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
        ],
    },
    { path: '**', redirectTo: 'error/403', pathMatch: 'full' },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
})

export class AppRoutingModule { }
