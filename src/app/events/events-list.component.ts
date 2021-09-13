import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <events-thumbnail
        [event]="event1"
        (eventClick)="handleEventClicked($event)"
      ></events-thumbnail>
    </div>
  `,
})
export class EventsListComponent {
  event1: any = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.9,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
  };

  handleEventClicked(data): void {
    console.log('recieved ', data);
  }
}
