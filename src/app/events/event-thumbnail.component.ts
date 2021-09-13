import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-thumbnail',
  styles: [
    `
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
      .thumbnail {
        min-height: 210px;
      }
    `,
  ],
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <div>Time: {{ event?.time }}</div>
      <div [ngSwitch]="event?.time">
        <span *ngSwitchCase="'8:00 am'">Early Start</span>
        <span *ngSwitchCase="'10:00 am'">Late Start</span>
        <span *ngSwitchDefault>Normal Start</span>
      </div>
      <div>Price: \${{ event?.price }}</div>
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location?.address }}</span>
        <span class="pad-left"></span>
        <span>{{ event?.location?.city }}, {{ event?.location?.country }}</span>
      </div>
      <div *ngIf="event?.onlineUrl">Online URL: {{ event?.onlineUrl }}</div>
    </div>
  `,
})
export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
}
