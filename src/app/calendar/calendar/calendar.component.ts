import { Component } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  appointments: any[] = [];
  today = new Date();

  addAppointment(appointment: any) {
    this.appointments.push(appointment);
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
  }

  moveAppointment(event: CdkDragDrop<any>) {
    const prevIndex = this.appointments.findIndex(a => a === event.item.data);
    this.appointments.splice(prevIndex, 1);
    this.appointments.splice(event.currentIndex, 0, event.item.data);
  }
}