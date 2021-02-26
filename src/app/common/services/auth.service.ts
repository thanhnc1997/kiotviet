import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Modules
import { environment } from 'src/environments/environment';
import { HttpUtilities } from 'src/app/common/helpers';


@Injectable()
export class AuthService {
    headers: HttpHeaders;
    API_URI = environment.API_URI + '/v1/auth';

    constructor(
        private http: HttpClient,
        private httpService: HttpUtilities
    ) {
        this.headers = this.httpService.getHttpClientHeaders();
    }

    /**
     * Login
     * @param {*} requestBody
     */
    login(requestBody: object) {
        return this.http.post(
            this.API_URI + '/login-password?group=web',
            requestBody,
            {
                headers: this.headers
            }
        ).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }
}
