import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Menu } from '../menu';
import { MenusService } from '../menus.service';

declare var $: any;


@Component({
  selector: 'app-menus-list',
  templateUrl: './menus-list.component.html',
  styleUrls: ['./menus-list.component.scss']
})
export class MenusListComponent implements OnInit, AfterViewInit {

  public menus: Menu[];

  constructor(private _menusService: MenusService) { }

  ngOnInit() {
    this._menusService.getMenus().then((menus: Menu[]) => {
      this.menus = menus.map((menus) => {        
        return menus;
      });
    });  
  }
  ngAfterViewInit() {
    $(function () {
      $('.parallax').parallax();
    })
  }
}

