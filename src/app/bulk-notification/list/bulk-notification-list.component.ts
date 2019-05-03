import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ps-bulk-notification-list',
  templateUrl: './bulk-notification-list.component.html',
  styleUrls: ['./bulk-notification-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulkNotificationListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
