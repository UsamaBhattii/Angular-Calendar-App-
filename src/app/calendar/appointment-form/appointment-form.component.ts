import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
  appointmentForm: FormGroup;

  @Output() appointmentAdded = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  addAppointment() {
    if (this.appointmentForm.valid) {
      this.appointmentAdded.emit(this.appointmentForm.value);
      this.appointmentForm.reset();
    }
  }
}