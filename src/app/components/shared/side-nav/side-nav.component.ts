import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            animate('300ms cubic-bezier(0.4, 0.0, 0.2, 1)',
              style({ width: 100 }))
          ]
        ),
        transition(
          ':leave',
          [
            animate('200ms cubic-bezier(0.4, 0.0, 0.2, 1)',
              style({ width: 0 }))
          ]
        )
      ]
    )
  ]
})
export class SideNavComponent {

  isExpanded = false;
  naviList: any = [
    { icon: 'data_thresholding', label: 'Dashboard', link: 'dashboard' },
    { icon: 'account_balance', label: 'Fund', link: 'fundsgrid' },
    { icon: 'list', label: 'Summary by Fund', link: 'summaryfunds' },
    { icon: 'dashboard', label: 'Custom View', link: 'customview' },]
}
