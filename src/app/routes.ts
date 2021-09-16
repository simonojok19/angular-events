import { Routes } from '@angular/router';
import {
  CreateEventComponent,
  EvenDetailsComponent,
  EventRouteGuard,
  EventsListComponent,
  EventsListResolverService,
} from './events';
import { Error404Component } from './errors/404.component';

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
