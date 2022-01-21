import { Location } from "./location";

export class Event {
  [key: string]: any;
  name: string = '';
  date: string = '';
  time: string = '';
  location: Location = new Location();
}
