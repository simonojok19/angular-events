import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { EventsService } from '../shared/events.service';

@Injectable()
export class EventRouteGuard implements CanActivate {
  constructor(private eventsService: EventsService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const eventExist = !!this.eventsService.getEvent(
      Number(route.paramMap.get('id'))
    );

    if (!eventExist) {
      this.router
        .navigate(['/404'])
        .then((result) => console.log('Routed to /events', result));
    }

    return eventExist;
  }
}
