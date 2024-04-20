import { LocationEventEntity } from "../entities"

export interface LocationEventRepository {
  registerLocationEvent(locationEvent: LocationEventEntity): Promise<LocationEventEntity | null>
  findLocationEventById(location_id: number): Promise<LocationEventEntity | null>
  listLocationEvents(): Promise<LocationEventEntity[] | null>
  updateLocationEvent(locationEvent: LocationEventEntity): Promise<LocationEventEntity | null>
}