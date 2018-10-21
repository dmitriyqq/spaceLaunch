import { Component, OnInit, ViewChild } from '@angular/core';
import { Globe } from './globe';

@Component({
  selector: 'app-earth',
  templateUrl: './earth.component.html',
  styleUrls: ['./earth.component.css']
})
export class EarthComponent implements OnInit {
  globe: Globe;
  placeholder: HTMLElement;

  constructor() {
    const width = window.innerWidth;
    const height = window.innerHeight;
  }
  
  ngOnInit() {
    this.placeholder = document.getElementById('placeholder');
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.globe = new Globe(width, height, this.placeholder);
    this.globe.init();
  }

}
