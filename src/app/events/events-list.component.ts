import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <events-thumbnail
            [event]="event"
            (eventClick)="handleEventClicked($event)"
          ></events-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent {
  handleEventClicked(data): void {
    console.log('recieved ', data);
  }
}
