export class User {
  id: number;
  name : string;
  username : string;
  address : Object;

  constructor(id : number, name : string, username : string, address : Object){
    this.id = id;
    this.name = name;
    this.username = username;
    this.address = address;
  }

}
