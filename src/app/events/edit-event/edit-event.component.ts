import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from '../model/event';
import { EventService } from '../service/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  eventId : number;
  formEvents : FormGroup;


  constructor(
    private service : EventService,
    private formBuilder : FormBuilder,
    private router: Router,
    private activeRoute : ActivatedRoute
    ) {
    let activeEvent;
    this.activeRoute.params.subscribe(
      params => {
        this.eventId = params['id'];
        //console.log(this.eventId);
        activeEvent = this.service.getEventById(+this.eventId);
        //console.log(activeEvent);

      }
    );

    this.formEvents = this.formBuilder.group({
      id : [activeEvent.id, Validators.required],
      title : [activeEvent.title, Validators.required],
      place : [activeEvent.place, Validators.required],
      start : [activeEvent.start, Validators.required],
      end : [activeEvent.end, Validators.required]
    });


   }

   onSubmit(){
     const formValues = this.formEvents.value;
     const event = new Events(
       formValues.id,
       formValues.title,
       formValues.place,
       formValues.start,
       formValues.end
      );

     //console.log(this.eventId + " --- " + JSON.stringify(event));
     this.service.editEvent(+this.eventId, event);

     //console.log(this.service.getEvents());
     this.router.navigate(["/events"]);
   }

  ngOnInit(): void {
  }

}
