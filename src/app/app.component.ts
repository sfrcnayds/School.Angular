import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'school-spa';
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.currentLang = 'en';
  }
}
