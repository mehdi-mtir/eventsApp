import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Events } from '../model/event';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnChanges {
  @Input() eventId;
  activeEvent : Events;

  constructor(private service : EventService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.activeEvent = this.service.getEventById(this.eventId);
  }

}
