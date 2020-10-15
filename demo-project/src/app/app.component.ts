import { Component } from '@angular/core';
import { CobrowseService } from '@nilsthomann/ng-cobrowse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'demo-project';

  constructor(cobrowseService: CobrowseService) {
    cobrowseService.start({
      device_name: 'Test Device',
      device_id: '42',
      user_email: 'test@test.com',
      user_name: 'Test User',
      user_id: '42',
    });
  }
}
