import { LocationEventEntity } from "../entities"

export class LocationEventValue implements LocationEventEntity {
  name_location: string
  latitude: string | undefined
  longitude: string | undefined
  address_location: string

  constructor(locationEvent: LocationEventEntity) {
    this.name_location = locationEvent.name_location
    this.latitude = locationEvent.latitude
    this.longitude = locationEvent.longitude
    this.address_location = locationEvent.address_location
  }
}