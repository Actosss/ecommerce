import { Roles } from "./role";

export class User {
  id!: number;
  username: string = "";
  password: string = "";
  email:string = "";
  name: string = "";
  roles!: Roles;
  token: string = "";
}
