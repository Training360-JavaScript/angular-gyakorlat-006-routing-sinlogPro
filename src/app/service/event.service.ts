import { events } from './../mocks/event.service.mock';
import { Injectable } from '@angular/core';
import { Event } from '../model/event';


@Injectable({
  providedIn: 'root'
})
export class EventService {

allEventList: Event[] = events;

  /* allEventList: Event[] = [
    {name: 'Alpha Iron', date: '2022.01.16', time: '16:15', location: {address: 'élkj', city: 'af', country: 'fs'}},
    {name: 'Beta Ice', date: '2022.01.17', time: '06:35', location: {address: 'élkj', city: 'af', country: 'fs'}},
    {name: 'Delta Air', date: '2022.01.18', time: '05:25', location: {address: 'élkj', city: 'af', country: 'fs'}}
  ]; */

  constructor() { }

  getAll(): Event[] {
    return this.allEventList;
  }

}
