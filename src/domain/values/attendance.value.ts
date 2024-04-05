import { AttendanceEntity } from "domain/entities";

export class AttendanceValue implements AttendanceEntity {
  event_id: number;
  user_id: number;
  attendance_date: string;

  constructor(attendance: AttendanceEntity) {
    this.event_id = attendance.event_id;
    this.user_id = attendance.user_id;
    this.attendance_date = attendance.attendance_date;
  }
}