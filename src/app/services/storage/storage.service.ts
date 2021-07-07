import { Injectable } from '@angular/core';
/* eslint-disable */
// import * as SecureStorage from 'secure-web-storage';
import * as CryptoJs from 'crypto-js';
import { Variables } from '../variables';

declare var require: any
const SecureStorage = require('secure-web-storage');


const { TOKEN } = Variables;

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  secureStorage: any;

  constructor() {

    let SECRET_KEY: any = 'WORKCITY_STAFF_ID###';

    this.secureStorage = new SecureStorage(localStorage, {
      hash: (key: any) => {
        key = CryptoJs.SHA256(key, SECRET_KEY);

        return key.toString();
      },
      encrypt: function encrypt(data: any) {
        data = CryptoJs.AES.encrypt(data, SECRET_KEY);

        data = data.toString();

        return data;
      },
      decrypt: function decrypt(data: any) {

        data = CryptoJs.AES.decrypt(data, SECRET_KEY);
        if (data) {
          try {
            data = data.toString(CryptoJs.enc.Utf8);
            if (data) {
              return data;
            }
          }
          catch (e) {
            return null
          }
        }
        return null;
      }
    })

    let data = {
      secret: 'data'
    }

    this.secureStorage.setItem('data', data);
  }

  getMyData() {
    let data = this.secureStorage.getItem('data');
    if (data) {
      return this.secureStorage.getItem('data');
    } else {
      return null;
    }

  }


  setAccessToken(token: string): any {
    this.secureStorage.setItem(TOKEN, token)
  }

  getAccessToken(): any {
    let token = this.secureStorage.getItem(TOKEN);
    if (token) {
      return token;
    }
    return null;
  }

  removeAccessToken(): any {
    this.secureStorage.removeItem(TOKEN);
  }

  // setRefreshToken(token: string): any {
  //   this.secureStorage.setItem(REFRESH_TOKEN, token)
  // }

  // getRefreshToken(): any {
  //   let token = this.secureStorage.getItem(REFRESH_TOKEN);
  //   if (token) {
  //     return token;
  //   }
  //   return null;
  // }

  // removeRefreshToken(): any {
  //   this.secureStorage.removeItem(REFRESH_TOKEN);
  // }

  // setCanNavigate(nav: string): any {
  //   this.secureStorage.setItem(CAN_NAV, nav)
  // }

  // getCanNavigate(): any {
  //   let nav = this.secureStorage.getItem(CAN_NAV);
  //   if (nav) {
  //     return nav;
  //   }
  //   return null;
  // }

  // removeCanNavigate(): any {
  //   this.secureStorage.removeItem(CAN_NAV);
  // }

  // setOrganization(org: any): any {
  //   this.secureStorage.setItem(ORG, org)
  // }

  // getOrganization(): any {
  //   let org = this.secureStorage.getItem(ORG);
  //   if (org) {
  //     return org;
  //   }
  //   return null;
  // }

  // removeOrganization(): any {
  //   this.secureStorage.removeItem(ORG);
  // }

  // setData(key: string, value: any) {
  //   let data = JSON.stringify((value));
  //   localStorage.setItem(key, data);
  // }

  // getData(key: string) {
  //   let data = localStorage.getItem(key);
  //   if (data != null) {
  //     return JSON.parse(data);
  //   }
  //   return null;
  // }

  clearCurrentUser() {
    this.secureStorage.removeItem(TOKEN);
  }
}