import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EvenDetailsComponent } from './events/event-details/even-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteGuard } from './events/event-details/event-route.guard';

export const appRoutes: Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/new', component: CreateEventComponent },
  {
    path: 'events/:id',
    component: EvenDetailsComponent,
    canActivate: [EventRouteGuard],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
