import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EvenDetailsComponent } from './events/event-details/even-details.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EvenDetailsComponent },
];
