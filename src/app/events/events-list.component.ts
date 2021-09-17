import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventsService } from './shared/events.service';
import { ToastrService } from '../common/toastr.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

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
export class EventsListComponent implements OnInit {
  events: IEvent[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.events = this.activatedRoute.snapshot.data.events;
  }
}
