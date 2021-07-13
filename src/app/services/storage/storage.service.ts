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
  
  clearCurrentUser() {
    this.secureStorage.removeItem(TOKEN);
  }
}