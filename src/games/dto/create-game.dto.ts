import { Type } from "class-transformer";
import {
  IsArray,
  IsDecimal,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { CreateGenreDto } from "src/genres/dto/create-genre.dto";
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

  @IsDecimal()
  imdbRating: number;

  @IsString()
  youtubeUrl: string;

  @IsString()
  gamePlayUrl: string;

  @ValidateNested({ each: true })
  @Type(() => CreateGenreDto)
  @IsArray()
  @IsOptional()
  genres?: CreateGenreDto[];
}
