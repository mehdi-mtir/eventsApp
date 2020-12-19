import { Component, OnInit } from '@angular/core';
import { Events } from '../model/event';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent implements OnInit {
  events : Events[];
  constructor(private service : EventService) { }

  ngOnInit(): void {
    this.events = this.service.events;
    //console.log(this.events[0].title);
  }

}
