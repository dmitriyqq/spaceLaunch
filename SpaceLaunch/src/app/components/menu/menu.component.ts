import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  countries: string[];
  tab: boolean;

  constructor() { }

  ngOnInit() {
    this.countries = ['Россия', 'США', 'Китай'];
    this.tab = true;
  }

  tabSwitch() {
    this.tab = !this.tab;
  }

}

enum FileAccess {

}
