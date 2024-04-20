import { AttendanceEntity } from "../entities"

export interface AttendanceRepository {
  registerAttendance(attendance: AttendanceEntity): Promise<AttendanceEntity | null>
  findAttendanceById(attendance_id: number): Promise<AttendanceEntity | null>
  listAttendances(): Promise<AttendanceEntity[] | null>
}