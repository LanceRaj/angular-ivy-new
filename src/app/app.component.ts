import { Component, VERSION,LOCALE_ID,Inject } from '@angular/core';
import {formatNumber, getLocaleDateFormat, FormatWidth} from "@angular/common";
var language;
if (window.navigator.languages) {
    language = window.navigator.languages[0];
} else {
    language =  window.navigator.language;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor(@Inject(LOCALE_ID) public locale: string){}
  name = 'Angular ' + VERSION.major;
     numner =  formatNumber(43000200.530, language, "1.2-2");
     locale1=language
     dateVal  =new Date();
     Dateformat = getLocaleDateFormat( this.locale, FormatWidth.Medium );
   
  }