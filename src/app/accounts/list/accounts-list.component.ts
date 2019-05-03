import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ps-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountsListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
