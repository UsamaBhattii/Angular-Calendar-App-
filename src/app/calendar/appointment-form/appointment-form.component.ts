import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm!: FormGroup;
  @Output() appointmentAdded = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.appointmentForm?.get(controlName);
    if (control?.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

  onSubmit(): void {
    if (this.appointmentForm?.valid) {
      console.log('Form Value:', this.appointmentForm.value);
      this.appointmentAdded.emit(this.appointmentForm.value);
      this.appointmentForm.reset();
    }
  }

  onCancel(): void {
    this.appointmentForm?.reset();
  }
}
