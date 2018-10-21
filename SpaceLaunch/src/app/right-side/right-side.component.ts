import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.css']
})
export class RightSideComponent implements OnInit {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangedLaunchId = new EventEmitter<number>();
  @Input() openList: boolean;
  @Input() countries: string[];
  @Input() filterType: number;
  @Input() year: number;

  public launchId: number = null;
  constructor() { }

  ngOnInit() {
  }

  onChanged(id: number) {
    this.launchId = id;
  }

  backToList() {
    this.launchId = null;
  }

  closeList() {
    this.openList = false;
  }
}
