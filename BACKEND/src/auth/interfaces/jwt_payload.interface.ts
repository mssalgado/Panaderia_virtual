import { Role } from "src/user/models/user.enum";

export interface IJwtPayload{
    usuario: string;
    role : Role;
}