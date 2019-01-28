import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menucard',
  templateUrl: './menucard.component.html',
  styleUrls: ['./menucard.component.scss']
})
export class MenucardComponent implements OnInit {

  @Input() menu: any;
  @Input() index: Int16Array;

  constructor() { }

  ngOnInit() {
  }

}
