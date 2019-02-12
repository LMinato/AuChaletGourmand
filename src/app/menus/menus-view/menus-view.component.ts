import { Component, OnInit, Input } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-menus-view',
  templateUrl: './menus-view.component.html',
  styleUrls: ['./menus-view.component.scss']
})
export class MenusViewComponent implements OnInit {

  @Input() menu: Menu;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}

