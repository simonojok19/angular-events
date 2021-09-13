import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EvenDetailsComponent } from './events/event-details/even-details.component';
import { CreateEventComponent } from './events/create-event.component';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events/:id', component: EvenDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
