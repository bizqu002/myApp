import { Component } from '@angular/core';
import { MatomoTracker } from 'ngx-matomo';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private matomoTracker: MatomoTracker
  ) {}

  ngOnInit() {
    this.matomoTracker.setUserId('Paulina');
    this.matomoTracker.setDocumentTitle('ngx-Matomo Test');
  }


  onClickFunction(userEvent){
    //console.log (userEvent);
    console.log('Event caught');
    this.matomoTracker.trackEvent('button', 'click', 'star', userEvent);
  }

}