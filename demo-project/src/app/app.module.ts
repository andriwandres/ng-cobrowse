import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  CobrowseService,
  COBROWSE_IO_LICENSE_KEY,
} from '@nilsthomann/ng-cobrowse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    CobrowseService,
    { provide: COBROWSE_IO_LICENSE_KEY, useValue: 'q-i688aoaQpM9g' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
