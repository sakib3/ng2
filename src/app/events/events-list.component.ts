import { Component } from '@angular/core'

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
export class EventListComponent {
    events = [
        {
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
        },
        {
            id: 2,
            name:'React Connect',
            date: '7/13/2116',
            time: '11:00 am',
            price: 299.99,
            imageUrl: '/assets/images/react-conf.png',
            location: {
                address: '1057 UX',
                city: 'Dallas',
                country: 'USA'
            }
        },
        {
            id: 3,
            name:'Vue Connect',
            date: '1/10/2046',
            time: '08:00 am',
            price: 899.99,
            imageUrl: '/assets/images/vue-conf.jpg',
            location: {
                address: '7 Vuter goli',
                city: 'Dhaka',
                country: 'Bangladesh'
            }
        }
    ]
}