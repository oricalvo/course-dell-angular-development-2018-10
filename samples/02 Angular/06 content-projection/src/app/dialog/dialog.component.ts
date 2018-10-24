import {Component, Injectable, OnInit} from '@angular/core';

@Injectable()
export class DialogService {
  constructor() {
  }

  close() {
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  providers: [DialogService],
  // viewProviders: [DialogService],
})
export class DialogComponent implements OnInit {
  open: boolean = true;

  constructor(service: DialogService) { }

  ngOnInit() {
  }

  close() {
    this.open = false;
  }
}
