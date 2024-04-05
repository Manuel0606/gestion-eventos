import { EventInfoEntity } from "domain/entities";

export class EventInfoValue implements EventInfoEntity {
  title: string
  description_event: string
  event_date: string
  location_id: number

  constructor(eventInfo: EventInfoEntity) {
    this.title = eventInfo.title;
    this.description_event = eventInfo.description_event;
    this.event_date = eventInfo.event_date;
    this.location_id = eventInfo.location_id;
  }
}