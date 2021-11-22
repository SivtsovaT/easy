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

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'name', component: NameComponent},
  { path: 'navbar', component: NavbarComponent},
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
    NavbarComponent


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
