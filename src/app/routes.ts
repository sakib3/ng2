import {Routes} from '@angular/router'
import {
    EventListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver
} from './events/index'
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
export const appRoutes:Routes = [
    {path:'404', component: Error404Component},
    {path:'events/new', component: CreateEventComponent, canDeactivate:['canDeactivateCreateEvent']},
    {path:'events', component: EventListComponent, resolve:{events: EventListResolver}},
    {path:'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    {path:'', redirectTo: '/events', pathMatch: 'full'},
    {path:'user', loadChildren:'./user/user.module#UserModule'}
];