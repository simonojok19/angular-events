import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventsService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EvenDetailsComponent } from './events/event-details/even-details.component';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
} from '@angular/router';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteGuard } from './events/event-details/event-route.guard';
import { EventsListResolverService } from './events/events-list-resolver.service';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EvenDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  providers: [
    EventsService,
    ToastrService,
    EventRouteGuard,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtySate,
    },
    EventsListResolverService,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

export function checkDirtySate(
  component: CreateEventComponent,
  activatedRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  }
  return true;
}
