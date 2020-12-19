import { Injectable } from '@angular/core';
import { Events } from '../model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events : Events[];

  constructor() {
    this.events = [
      new Events(1, 'event 1', 'Tunis', new Date('12-10-2020'), new Date('12-15-2020')),
      new Events(2, 'event 2', 'Sousse', new Date('11-09-2020'), new Date('11-16-2020')),
      new Events(3, 'event 3', 'Sfax', new Date('10-20-2020'), new Date('10-25-2020'))
    ]
   }
}
