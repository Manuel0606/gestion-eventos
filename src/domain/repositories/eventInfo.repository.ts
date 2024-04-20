import { EventInfoEntity } from "../entities"

export interface EventInfoRepository {
  registerEvent(eventInfo: EventInfoEntity): Promise<EventInfoEntity | null>
  findEventById(event_id: number): Promise<EventInfoEntity | null>
  listEvents(): Promise<EventInfoEntity[] | null>
  updateEvent(eventInfo: EventInfoEntity): Promise<EventInfoEntity | null>
  deleteEvent(event_id: number): Promise<boolean>
}