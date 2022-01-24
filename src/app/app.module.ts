import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TimeSlotModal } from '../util/time-slot-modal/time-slot-modal.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SignupFormComponent } from './login/signup-form/signup-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './student/dashboard/dashboard.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { StudentComponent } from './student/student.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProfileComponent } from './student/profile/profile.component';
import {MatDividerModule} from '@angular/material/divider';
import { NewRequestComponent } from './student/dashboard/new-request/new-request.component';
import {MatSelectModule} from '@angular/material/select';
import { PastRequestComponent } from './student/dashboard/past-request/past-request.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginFormComponent,
    SignupFormComponent,
    DashboardComponent,
    StudentComponent,
    ProfileComponent,
    NewRequestComponent,
    PastRequestComponent,
    TimeSlotModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatDividerModule,
    MatSelectModule,
    MatChipsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
