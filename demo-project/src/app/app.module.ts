import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  CobrowseService,
  COBROWSE_IO_LICENSE_KEY,
  COBROWSE_IO_API_URL,
} from '@nilsthomann/ng-cobrowse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    CobrowseService,
    { provide: COBROWSE_IO_LICENSE_KEY, useValue: '[YOUR_LICENSE_KEY]' },
    { provide: COBROWSE_IO_API_URL, useValue: '[YOUR_API_URL]' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
