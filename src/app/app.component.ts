import { Component, AfterViewInit } from '@angular/core';

declare var $: any;
declare var AOS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'AuChaletGourmand';

  ngAfterViewInit() {
    $(function () {
      $('.parallax').parallax();
    })

    AOS.init();
  }
}
