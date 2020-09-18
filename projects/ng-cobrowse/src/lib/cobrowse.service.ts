import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { CobrowseIO, CobrowseIOCustomerData } from './cobrowse-io';

declare var CobrowseIO: CobrowseIO;

@Injectable({
  providedIn: 'root',
})
export class CobrowseService {
  private script = undefined;

  constructor(
    @Inject(DOCUMENT) private readonly documentRef: any,
    @Inject(PLATFORM_ID) private readonly platformId: any,
    @Inject('cobrowseIoLicenseKey') cobrowseIoLicenseKey: string
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.addScriptToDom();

      if (cobrowseIoLicenseKey) {
        CobrowseIO.license = cobrowseIoLicenseKey;
      } else {
        throw Error('Please provide a licensekey to use cobrowse.io');
      }
    }
  }

  start(customerData?: CobrowseIOCustomerData) {
    if (isPlatformBrowser(this.platformId)) {
      CobrowseIO.customerData = customerData;

      CobrowseIO.client().then(() => {
        CobrowseIO.start();
      });
    }
  }

  startWithCode(customerData?: CobrowseIOCustomerData) {
    return new Promise<string>((resolve, reject) => {
      if (isPlatformBrowser(this.platformId)) {
        CobrowseIO.customerData = customerData;

        CobrowseIO.client().then(() => {
          CobrowseIO.createSessionCode().then((code: string) => {
            CobrowseIO.start();
            resolve(code);
          });
        });
      } else {
        reject();
      }
    });
  }

  private addScriptToDom() {
    const promise = new Promise<CobrowseIO>((resolve) => {
      CobrowseIO = {
        client: () => {
          if (!this.script) {
            this.script = this.documentRef.createElement('script');
            this.script.src = 'https://js.cobrowse.io/CobrowseIO.js';
            this.script.async = 1;
            const firstScript = this.documentRef.getElementsByTagName(
              'script'
            )[0];
            firstScript.parentNode.insertBefore(this.script, firstScript);
            this.script.onload = () => {
              resolve(CobrowseIO);
            };
          }
          return promise;
        },
      };
    });
  }
}
