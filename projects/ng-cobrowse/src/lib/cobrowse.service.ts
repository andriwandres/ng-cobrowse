import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { CobrowseIO, CobrowseIOCustomData } from './cobrowse-io';

declare var CobrowseIO: CobrowseIO;

export const COBROWSE_IO_LICENSE_KEY = 'cobrowseIoLicenseKey';
export const COBROWSE_IO_API_URL = 'cobrowseIoApiUrl';

@Injectable({
  providedIn: 'root',
})
export class CobrowseService {
  private script = undefined;

  constructor(
    @Inject(DOCUMENT) private readonly documentRef: any,
    @Inject(PLATFORM_ID) private readonly platformId: any,
    @Inject(COBROWSE_IO_LICENSE_KEY) cobrowseIoLicenseKey: string,
    @Optional() @Inject(COBROWSE_IO_API_URL) cobrowseIoApiUrl: string
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.addScriptToDom().then(() => {
        if (cobrowseIoLicenseKey) {
          CobrowseIO.license = cobrowseIoLicenseKey;
        } else {
          throw Error('Please provide a licensekey to use cobrowse.io');
        }

        if (cobrowseIoApiUrl) {
          CobrowseIO.api = cobrowseIoApiUrl;
        }
      });
    }
  }

  start(customData?: CobrowseIOCustomData) {
    if (isPlatformBrowser(this.platformId)) {
      CobrowseIO.client().then(() => {
        CobrowseIO.customData = customData;
        CobrowseIO.start();
      });
    }
  }

  startWithCode(customData?: CobrowseIOCustomData) {
    return new Promise<string>((resolve, reject) => {
      if (isPlatformBrowser(this.platformId)) {
        CobrowseIO.client().then(() => {
          CobrowseIO.start();
          CobrowseIO.createSessionCode().then((code: string) => {
            CobrowseIO.customData = customData;
            resolve(code);
          });
        });
      } else {
        reject();
      }
    });
  }

  stop() {
    if (isPlatformBrowser(this.platformId)) {
      return CobrowseIO.stop();
    }
  }

  private addScriptToDom() {
    const promise = new Promise<CobrowseIO>((resolve) => {
      // tslint:disable-next-line: no-string-literal
      window['CobrowseIO'] = {
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
    return promise;
  }
}
