import { Roles } from "./role";

export interface User {
  id: number;
  username: string ;
  password: string ;
  email:string ;
  name: string ;
  roles: Roles;
  token: string ;
}
