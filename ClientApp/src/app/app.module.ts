import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';


import { DepartmentService } from './services/department.service';
import { HttpModule } from '@angular/http';
import { DoctorFormComponent } from './components/doctor-form/doctor-form.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorService } from './services/doctor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DepartmentFormComponent,
    DepartmentListComponent,
    DoctorFormComponent,
    DoctorListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
      HttpClientModule,
      HttpModule,
    FormsModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'department/new', component: DepartmentFormComponent },
        { path: 'department/:id', component: DepartmentFormComponent },
        { path: 'department', component: DepartmentListComponent },

        { path: 'doctor/new', component: DoctorFormComponent },
        { path: 'doctor/:id', component: DoctorFormComponent },
        { path: 'doctor', component: DoctorListComponent },


      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
    ],
    providers: [DepartmentService, DoctorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
