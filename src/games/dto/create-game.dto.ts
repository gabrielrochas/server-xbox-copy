import { Type } from "class-transformer";
import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { CreateGenreDto } from "src/genres/dto/create-genre.dto";
import { Genre } from "src/genres/entities/genres.entity";
import { Game } from "../entities/game.entity";

export class CreateGameDto extends Game {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  cover: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  launchYear: string;

  @IsNumber()
  @IsNotEmpty()
  imdbRating: number;

  @IsString()
  @IsNotEmpty()
  youtubeUrl: string;

  @IsString()
  @IsNotEmpty()
  gamePlayUrl: string;

  @ValidateNested({ each: true })
  @Type(() => CreateGenreDto)
  @IsOptional()
  @IsArray()
  genres: Genre[];
}
