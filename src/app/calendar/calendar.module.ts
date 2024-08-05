import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { CalendarRoutingModule } from './calendar-routing.module';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppointmentFormComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    DragDropModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
