import { Component, OnInit } from '@angular/core';
import { EventsService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private eventsService: EventsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.event = this.eventsService.getEvent(
      Number(this.activatedRoute.snapshot.paramMap.get('id'))
    );
  }
}
