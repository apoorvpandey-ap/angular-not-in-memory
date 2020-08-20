import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesCardComponent } from './employees/employees.card.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { HeaderComponent }         from './header/header.component';
import { FooterComponent }         from './footer/footer.component';
import { CameraComponent } from './camera/camera.component';
//import { FingerprintComponent } from './fingerprint/fingerprint.component';
import { SignatureComponent } from './signature/signature.component';
import {WebcamModule} from './modules/webcam/webcam.module';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
//import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    WebcamModule,
    BrowserAnimationsModule,
    MatCardModule
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
  //  HttpClientInMemoryWebApiModule.forRoot(
  //    InMemoryDataService, { dataEncapsulation: false }
  //  )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeaderComponent,
    FooterComponent,
    HeroSearchComponent,
    EmployeesComponent,
    EmployeesCardComponent,
    EmployeeDetailComponent,
    CameraComponent,
//FingerprintComponent,
    SignatureComponent,
    EmployeeSearchComponent
    //FlexLayoutModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
