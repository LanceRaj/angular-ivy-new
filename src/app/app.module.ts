import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { registerLocaleData } from '@angular/common';

import localeHu from '@angular/common/locales/hu';
import localeDe from '@angular/common/locales/de';
import localeNo from '@angular/common/locales/nb';

registerLocaleData(localeHu, 'hu');
registerLocaleData(localeDe, 'de');
registerLocaleData(localeNo, 'nb');




@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
