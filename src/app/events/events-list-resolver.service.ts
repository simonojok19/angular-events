import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { EventsService } from './shared/events.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventsListResolverService implements Resolve<any> {
  constructor(private eventService: EventsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.eventService.getEvents().pipe(
      map((events) => {
        return events;
      })
    );
  }
}
