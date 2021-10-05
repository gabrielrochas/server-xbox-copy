import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { CreateGameDto } from "src/games/dto/create-game.dto";
import { CreateProfileDto } from "src/profiles/dto/create-profile.dto";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsBoolean()
  @IsNotEmpty()
  admin: boolean;

  @ValidateNested({ each: true })
  @Type(() => CreateProfileDto)
  @IsArray()
  @IsOptional()
  profiles: CreateProfileDto[];

  @ValidateNested({ each: true })
  @Type(() => CreateGameDto)
  @IsArray()
  @IsOptional()
  games: CreateGameDto[];
}
