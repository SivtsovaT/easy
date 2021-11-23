import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";

import { AppComponent } from './app.component';
import { AboutComponent }   from './about.component';
import { HomeComponent }   from './home.component';
import { NotFoundComponent }   from './not-found.component';
import { EnterNameComponent } from './enter-name/enter-name.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { ButtonGoOrStartComponent } from './button-go-or-start/button-go-or-start.component';
import { AppAuthorizationComponent } from './app-authorization/app-authorization.component';
import { NameComponent } from './name/name.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { DateComponent } from './date/date.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import { CalendarComponent } from './calendar/calendar.component';
import {CalendarModule} from "angular-calendar";
import {DateAdapter} from "angular-calendar";
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {CommonModule} from "@angular/common";
//import {FlatpickrModule} from "angularx-flatpickr";
import {NgbModalModule} from "@ng-bootstrap/ng-bootstrap";
import { TabsCalendarComponent } from './tabs-calendar/tabs-calendar.component';
import {MatTabsModule} from "@angular/material/tabs";



const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'name', component: NameComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'date', component: DateComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'tabs', component: TabsCalendarComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    EnterNameComponent,
    RegistrationComponent,
    LoginComponent,
    ButtonGoOrStartComponent,
    AppAuthorizationComponent,
    NameComponent,
    NavbarComponent,
    DateComponent,
    CalendarComponent,
    TabsCalendarComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    NgbModalModule,
    //FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    MatTabsModule

  ],

  exports: [CalendarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
