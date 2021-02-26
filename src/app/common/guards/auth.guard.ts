import { Observable } from 'rxjs';
import * as moment from 'moment-timezone';
import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

// Modules
import { StorageModel } from '../models';
import { LayoutService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private layoutService: LayoutService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        try {
            const token = this.layoutService.getToken();
            const expiredAt = this.layoutService.getTokenExpire();
            if (!token) {
                this.router.navigate(['auth/login']);
                return false;
            }
            if (
                moment(Date.now()).unix() >=
                parseInt(expiredAt, 10)
            ) {
                // TODO:: Refresh token
                this.layoutService.resetConfig();
                alert('phiên đăng nhập đã hết hạn');
                this.router.navigate(['auth/login']);
                return false;
            }

            return true;
        } catch (ex) {
            this.router.navigate(['auth/login']);
            return false;
        }
    }
}
