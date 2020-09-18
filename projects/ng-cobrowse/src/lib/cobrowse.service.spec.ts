import { inject, TestBed } from '@angular/core/testing';
import { CobrowseService } from './cobrowse.service';

describe('CobrowseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CobrowseService,
        { provide: 'cobrowseIoLicenseKey', useValue: 'TEST_LICENSE_KEY' },
      ],
    });
    window['CobrowseIO'] = undefined;
  });

  it('should be created', inject(
    [CobrowseService],
    (service: CobrowseService) => {
      expect(service).toBeTruthy();
    }
  ));
});
