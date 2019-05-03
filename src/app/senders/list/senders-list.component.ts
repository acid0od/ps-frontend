import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ps-senders-list',
  templateUrl: './senders-list.component.html',
  styleUrls: ['./senders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SendersListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
