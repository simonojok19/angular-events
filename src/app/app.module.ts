import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  ActivatedRouteSnapshot,
  RouterModule,
  RouterStateSnapshot,
} from '@angular/router';
import {
  CreateEventComponent,
  EvenDetailsComponent,
  EventRouteGuard,
  EventsListComponent,
  EventsListResolverService,
  EventsService,
  EventThumbnailComponent,
} from './events';
import { appRoutes } from './routes';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { ToastrService } from './common/toastr.service';

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
