import { IsString } from "class-validator";
import { Profile } from "../entities/profile.entity";

export class CreateProfileDto extends Profile {
  @IsString()
  nickname: string;

  @IsString()
  image: string;
}
