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
  @IsOptional()
  imdbRating?: number | null;

  @IsString()
  @IsOptional()
  youtubeUrl?: string | null;

  @IsString()
  @IsOptional()
  gamePlayUrl: string | null;

  @ValidateNested({ each: true })
  @Type(() => CreateGenreDto)
  @IsArray()
  @IsOptional()
  genres: CreateGenreDto[];
}
