import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Events } from '../model/event';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
  //providers : [EventService]
})
export class ListEventsComponent implements OnInit {
  events : Events[];
  activeEventId : number;
  constructor(private service : EventService, private router : Router) { }


  ngOnInit(): void {
    this.events = this.service.getEvents();
    //console.log ("Events list : " + JSON.stringify(this.service.events));
    //console.log(this.events[0].title);
  }


  deleteEvent(id : number) : void{
    this.service.deleteEvent(id);
  }

  goToEdit(id : number) : void{
    this.router.navigate(['/event', 'edit', id])
  }

  showDetails(id : number){
    this.activeEventId = id;
  }


}
