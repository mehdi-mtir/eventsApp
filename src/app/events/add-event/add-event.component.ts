import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Events } from '../model/event';
import { EventService } from '../service/event.service';


@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
  //providers: [EventService]
})
export class AddEventComponent implements OnInit {
  formEvents : FormGroup

  constructor(
    private service : EventService,
    private formBuilder : FormBuilder,
    private router: Router
    ) {
    this.formEvents = this.formBuilder.group({
      id : ['', Validators.required],
      title : ['', Validators.required],
      place : ['', Validators.required],
      start : ['', Validators.required],
      end : ['', Validators.required]
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
     this.service.addEvent(event);
     this.router.navigate(["/events"]);
   }

  ngOnInit(): void {
    //this.service.events.push(new Events(4, 'event 4', 'Tunis', new Date('12-10-2020'), new Date('12-15-2020')));
    //console.log("Events add :" + JSON.stringify(this.service.events));

  }

}
