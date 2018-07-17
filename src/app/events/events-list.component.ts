import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';

@Component({
    selector: 'events-list',
    template: `
    <nav-bar></nav-bar>
    <div>
        <h1>Upcomming Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event] = "event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventListComponent implements OnInit{
    events:any[];
    constructor(private eventService: EventService){
       
    }

    ngOnInit(){
        this.events = this.eventService.getEvents();
    }
    
}