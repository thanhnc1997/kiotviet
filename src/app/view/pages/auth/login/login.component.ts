import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pick } from 'lodash';
import { StorageModel } from 'src/app/common/models';

// Modules
import { AuthService, LayoutService } from 'src/app/common/services';

@Component({
    selector: '.c-login-page',
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.None,
    providers: [
        AuthService,
        LayoutService
    ]
})

export class LoginComponent implements OnInit {
    // Declaration State
    formState: any = {};
    formError: any = {};
    returnUrl: string;

    constructor(
        private authService: AuthService,
        private layoutService: LayoutService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    /**
     * Init
     */
    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
    }

    /**
     * Login
     */
    onLogin() {
        this.authService.login(
            this.formState
        ).then(respone => {
            if (respone.code) {
                this.formError = pick(
                    respone, ['code', 'message']
                );
                return;
            }

            // add layout config
            const { data } = respone;
            const { user, token } = data;
            this.layoutService.initConfig();
            this.layoutService.addUser(user);
            this.layoutService.addListStore(user.stores);
            this.layoutService.addToken(token.access_token);
            this.layoutService.addTokenExpire(token.access_expired_at);
            this.layoutService.changeCurrentStore(user.stores[0]);
            this.layoutService.addListPermission(user.permissions);
            this.router.navigate([this.returnUrl]);
        }).catch(error => {
            throw Error(error);
        })
    }
}