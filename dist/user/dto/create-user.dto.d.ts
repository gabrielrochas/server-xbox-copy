import { User } from "../entities/user.entity";
import { CreateProfileDto } from "src/profiles/dto/create-profile.dto";
export declare class CreateUserDto extends User {
    name: string;
    lastname: string;
    email: string;
    password: string;
    cpf: string;
    admin: boolean;
    profiles?: CreateProfileDto[];
}
