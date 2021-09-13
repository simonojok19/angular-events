import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar.component';
import { EventsService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EvenDetailsComponent } from './events/event-details/even-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EvenDetailsComponent,
  ],
  providers: [EventsService, ToastrService],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
