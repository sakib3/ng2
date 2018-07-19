import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
declare let toastr;
@Component({
    // selector: 'events-list',
    template: `
    <div>
        <h1>Upcomming Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event] = "event" (click)="handleThumbnailClick(event.name)"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class EventListComponent implements OnInit{
    events:any[];
    constructor(private eventService: EventService,
    private toastrService: ToastrService
    ){
       
    }

    ngOnInit(){
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName){
        this.toastrService.info(eventName, 'Thumnail Notification');
    }
    
}