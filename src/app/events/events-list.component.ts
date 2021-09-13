import { Component, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';
import { ToastrService } from '../common/toastr.service';

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
            (click)="handleThumbnailClick(event.name)"
          ></events-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: any[];

  constructor(
    private eventsService: EventsService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.events = this.eventsService.getEvents();
  }

  handleThumbnailClick(eventName): void {
    this.toastrService.success(eventName, 'Clicked');
  }
}
