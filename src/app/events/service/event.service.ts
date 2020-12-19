import { Injectable } from '@angular/core';
import { Events } from '../model/event';

@Injectable()
export class EventService {
  events : Events[];

  constructor() {
    //console.log("Hello from EventService constructor!")
    this.events = [
      new Events(1, 'event 1', 'Tunis', new Date('12-10-2020'), new Date('12-15-2020')),
      new Events(2, 'event 2', 'Sousse', new Date('11-09-2020'), new Date('11-16-2020')),
      new Events(3, 'event 3', 'Sfax', new Date('10-20-2020'), new Date('10-25-2020'))
    ]
   }


   getEvents() : Events[]{
    return this.events;
   }

   getEventById(id : number) : Events{
    const e = this.events.filter(evt => evt.id === id);
    return (e[0]);
   }

   addEvent(e : Events) : void{
    this.events.push(e);
   }

   editEvent(id : number, e : Events) : void{
    for(let i = 0; i<this.events.length; i++){
      if(this.events[i].id === id)
      this.events[i] = e;
    }
   }

   deleteEvent(id : number) : void{
    if(confirm("Etes-vous sure de vouloir supprimer")){
      for(let i = 0; i<this.events.length; i++){
        if(this.events[i].id === id)
        this.events.splice(i, 1);
      }
    }

   }

}
