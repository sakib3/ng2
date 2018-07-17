import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
    <nav-bar></nav-bar>
    <div>
        <h1>Upcomming Events</h1>
        <hr>
        <event-thumbnail 
        #myTemplateVariable
        (click) = "myTemplateVariable.logFoo()" 
        [event] = event1></event-thumbnail> 
    </div>
    `
})
export class EventListComponent {
    event1 = {
        id: 1,
        name:'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/ng-conf.jpg',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}