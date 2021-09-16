import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';
import { ToastrService } from '../common/toastr.service';
import { Subscription } from 'rxjs';

@Component({
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
export class EventsListComponent implements OnInit, OnDestroy {
  events: any[];
  subscription: Subscription;

  constructor(
    private eventsService: EventsService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.subscription = this.eventsService.getEvents().subscribe(
      (events) => {
        this.events = events;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Observable complete');
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
