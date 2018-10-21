import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit, OnChanges {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangedLaunchId = new EventEmitter<number>();
  @Input() public openList: boolean;

  @Input() filterType: number;
  @Input() year: number;

  public launchId: number = null;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    const sda = this.year;
  }

  onChanged(id: number) {
    this.launchId = id;
  }

  backToList() {
    this.launchId = null;
  }

  closeList() {
    this.year = null;
    this.openList = false;
  }
}
