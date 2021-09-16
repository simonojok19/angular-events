import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EvenDetailsComponent } from './events/event-details/even-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteGuard } from './events/event-details/event-route.guard';
import { EventsListResolverService } from './events/events-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: { events: EventsListResolverService },
  },
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events/:id',
    component: EvenDetailsComponent,
    canActivate: [EventRouteGuard],
  },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
