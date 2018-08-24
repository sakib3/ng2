import { Injectable } from "@angular/core";
import { Subject, Observable} from 'rxjs';
import { IEvent } from "./event.model";

@Injectable() 
export class EventService {
    getEvents(): Observable<IEvent[]>{
        let subject = new Subject<IEvent[]>();
        setTimeout(() => { 
            subject.next(EVENTS);
            subject.complete();
        } ,2000);
        return subject;
    }
    getEvent = (id: number):IEvent => EVENTS.find((e) => e.id == id);
}


const EVENTS: IEvent[] = [
    {
        id: 1,
        name:'Angular Connect',
        date: new Date('9/26/2036'),
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
        date: new Date('7/13/2116'),
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
        date: new Date('1/10/2046'),
        time: '08:00 am',
        price: 899.99,
        imageUrl: '/assets/images/vue-conf.png',
        location: {
            address: '7 Vuter goli',
            city: 'Dhaka',
            country: 'Bangladesh'
        }
    }
];