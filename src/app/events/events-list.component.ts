import { Component } from '@angular/core';
import { EventsService } from './shared/events.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <events-thumbnail [event]="event"></events-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent {
  events: any[];

  constructor(private eventsService: EventsService) {
    this.events = eventsService.getEvents();
  }
}
