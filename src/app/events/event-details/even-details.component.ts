import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';

@Component({
  templateUrl: './even-details.component.html',
  styles: [
    `
      .container {
        padding-left: 20px;
        padding-right: 20px;
      }

      .event-image {
        height: 100px;
      }
    `,
  ],
})
export class EvenDetailsComponent implements OnInit {
  event: any = {};

  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.event = this.eventsService.getEvent(1);
  }
}
