import { Roles } from "./role";

export interface UserProfile {
  id: number;
  username: string ;
  password: string ;
  email:string;
  firstname: string ;
  lastname: string ;
  roles: Roles;
  token: string ;
}
