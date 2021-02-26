import { Injectable } from '@angular/core';
import { isNil, pick } from 'lodash';

import { DefaultLayoutConfig } from 'src/app/config/dynamic-layout.config';
import { StorageModel } from 'src/app/common/models';

@Injectable({
    providedIn: 'root',
})
export class LayoutService {
    /**
     * Init
     */
    initConfig(): any {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            try {
                localStorage.setItem(
                    StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY,
                    JSON.stringify(DefaultLayoutConfig)
                )
                return;
            } catch (error) {
                this.removeConfig();
                console.error('config parse from local storage', error);
            }
        }
    }

    /**
     * Reset
     */
    resetConfig(): any {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }
        // transform data
        const setting = JSON.parse(
            configFromLocalStorage
        );
        localStorage.setItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY,
            JSON.stringify({
                ...setting,
                listStore: [],
                currentStore: {},
                currentUser: {},
                accessToken: null,
                tokenExpired: null,
                listPermissions: []
            })
        );
    }

    /**
     * Add Access Token
     */
    addToken(token: string) {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }
        // transform data
        const setting = JSON.parse(
            configFromLocalStorage
        );
        localStorage.setItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY,
            JSON.stringify({ ...setting, accessToken: token })
        );
        return token;
    }

    /**
     * Get Token
     */
    getToken() {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }
        // transform data
        const setting = JSON.parse(configFromLocalStorage);
        return setting.accessToken;
    }

    /**
     * Add Token Expire
     */
    addTokenExpire(token: string) {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }
        // transform data
        const setting = JSON.parse(
            configFromLocalStorage
        );
        localStorage.setItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY,
            JSON.stringify({ ...setting, tokenExpired: token })
        );
        return token;
    }

    /**
     * Get Token Expire
     */
    getTokenExpire() {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }
        // transform data
        const setting = JSON.parse(configFromLocalStorage);
        return setting.tokenExpired;
    }

    /**
     * Add Permission
     */
    addListPermission(permissions: string[]) {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }
        // transform data
        const setting = JSON.parse(
            configFromLocalStorage
        );
        localStorage.setItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY,
            JSON.stringify({ ...setting, listPermissions: permissions })
        );
        return permissions;
    }

    /**
     * List Permission
     */
    listPermission() {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }
        // transform data
        const setting = JSON.parse(configFromLocalStorage);
        return setting.listPermissions;
    }

    /**
     * Add User
     */
    addUser(user: string) {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }
        // transform data
        const setting = JSON.parse(
            configFromLocalStorage
        );
        localStorage.setItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY,
            JSON.stringify({ ...setting, currentUser: pick(user, ['id', 'name', 'phone', 'status', 'cover', 'role']) })
        );
        return user;
    }

    /**
     * Get User
     */
    getUser() {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }
        // transform data
        const setting = JSON.parse(configFromLocalStorage);
        return setting.currentUser;
    }

    /**
     * Get List Store
     */
    listStore() {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }
        // transform data
        const setting = JSON.parse(configFromLocalStorage);
        return setting.listStore;
    }

    /**
     * Change Current Store
     * @param {*} stores
     */
    addListStore(stores: any = {}) {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }
        // transform data
        const setting = JSON.parse(
            configFromLocalStorage
        );
        setting.listStore = stores;
        localStorage.setItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY,
            JSON.stringify(setting)
        );
        return stores;
    }

    /**
     * Get List Store
     */
    getCurrentStore() {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }
        // transform data
        const setting = JSON.parse(configFromLocalStorage);
        return setting.currentStore;
    }

    /**
     * Change Current Store
     * @param {*} store
     */
    changeCurrentStore(store: any = {}) {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return null;
        }
        // transform data
        const setting = JSON.parse(
            configFromLocalStorage
        );
        setting.currentStore = store;
        localStorage.setItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY,
            JSON.stringify(setting)
        );
        return store;
    }

    /**
     * Get List Store
     */
    getCollum(page: string) {
        const configFromLocalStorage = localStorage.getItem(
            StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY
        );
        if (isNil(configFromLocalStorage)) {
            return [];
        }

        // transform data
        const setting = JSON.parse(configFromLocalStorage);
        return setting.listTableCollum[page.toUpperCase()];
    }

    /**
     * Remove Config
     */
    private removeConfig() {
        localStorage.removeItem(StorageModel.LAYOUT_CONFIG_LOCAL_STORAGE_KEY);
    }

}
