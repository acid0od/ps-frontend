import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ps-notification-edit',
  templateUrl: './notification-edit.component.html',
  styleUrls: ['./notification-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
