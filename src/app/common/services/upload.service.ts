import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Config Module
import { HttpUtilities } from 'src/app/common/helpers';
import { environment } from 'src/environments/environment';

@Injectable()
export class UploadService {
    // Declaration variable
    API_URI = environment.API_URI + '/v1/images';

    constructor(
        private http: HttpClient,
        private httpService: HttpUtilities
    ) { }

    /**
     * Folder upload
     *
     * @public
     */
    UploadGroup = {
        BANNER: 'banners',
        PRODUCT: 'products',
        CATEGORY: 'categories'
    };

    /**
     * Upload Single
     * @param formData
     * @param groupName
     */
    single(formData: any, groupName: string) {
        return this.http.post(
            this.API_URI + '/upload-single?group=' + groupName,
            formData,
            {
                headers: {
                    Authorization: this.httpService.loadJwtToken()
                }
            },
        ).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }

    /**
     * Upload multiple
     * @param formData
     * @param groupName
     */
    multiple(formData: any, groupName: string) {
        return this.http.post(
            this.API_URI + '/upload-multiple/' + groupName,
            formData,
            {
                headers: {
                    Authorization: this.httpService.loadJwtToken()
                }
            },
        ).toPromise().then(
            result => JSON.parse(
                JSON.stringify(result)
            )
        );
    }
}
