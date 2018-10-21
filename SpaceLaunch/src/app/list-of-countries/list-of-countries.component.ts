import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-countries',
  templateUrl: './list-of-countries.component.html',
  styleUrls: ['./list-of-countries.component.css']
})
export class ListOfCountriesComponent implements OnInit {

  @Input() countries: string[];
  open: boolean;

  constructor() { }

  ngOnInit() {
  }

  public openSwitch() {
    this.open = !this.open;
  }

}
