export class Events {
  id : number;
  title : string;
  place : string;
  start : Date;
  end : Date;

  constructor(id : number, title : string, place : string, start : Date, end : Date){
    this.id = id;
    this.title = title;
    this.place = place;
    this.start = start;
    this.end = end;
  }

}
