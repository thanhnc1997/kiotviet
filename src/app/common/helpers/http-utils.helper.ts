// Angular
import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http';

// Plugins
import { isNil, isUndefined } from 'lodash';
import { StorageModel } from 'src/app/common/models';

@Injectable()
export class HttpUtilities {

    /**
     * Prepare query http params
     * @param queryParams: QueryParamsModel
     */
    getFindHTTPParams(queryParams): HttpParams {
        let params = new HttpParams();
        Promise.all([
            Object.keys(queryParams).map(el => {
                const value = queryParams[el];
                if (
                    value !== '' &&
                    !isUndefined(value)
                ) {
                    params = params.set(el, value);
                }
            })
        ]);
        return params;
    }

    /**
     * get standard content-type
     */
    getHttpClientHeaders(): HttpHeaders {
        const jwtToken = this.loadJwtToken();

        // TODO:: Set headers
        const result = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Authorization', `Bearer ${jwtToken}`);

        return result;
    }

    /**
     * Parse text params to object
     */
    parseParams(value: string): any {
        return value
            .replace(/(^\?)/, '')
            .split('&')
            .map(function (n) {
                return n = n.split('='),
                    this[n[0]] = n[1],
                    this;
            }.bind({}))[0];
    }

    /**
     * Load jwt token
     */
    loadJwtToken = () => {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return null;
        }
        // transform data
        const setting = JSON.parse(configFromLocalStorage);
        return setting.accessToken;
    }
}
