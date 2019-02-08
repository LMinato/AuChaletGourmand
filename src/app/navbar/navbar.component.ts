import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function(){
      var scrollTop = 0;
      $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
         $('.counter').html(scrollTop);
        
        if (scrollTop >= 10) {
          $('#global-nav').addClass('scrolled-nav');
          $('#brand-logo').addClass('brand-logo-scrolled');
        } else if (scrollTop < 10) {
          $('#global-nav').removeClass('scrolled-nav');
          $('#brand-logo').removeClass('brand-logo-scrolled');
        } 
        
      }); 
      
    });
  }

}
