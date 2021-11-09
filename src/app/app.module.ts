import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent }   from './about.component';
import { HomeComponent }   from './home.component';
import { NotFoundComponent }   from './not-found.component';
import { EnterNameComponent } from './enter-name/enter-name.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
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
    LoginComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
