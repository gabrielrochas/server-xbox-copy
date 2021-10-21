import {
  ArrayNotEmpty,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Game } from '../entities/game.entity';

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

  @IsInt({ each: true })
  @ArrayNotEmpty()
  @IsArray()
  @IsOptional()
  genresIds?: number[];

  @IsInt({ each: true })
  @ArrayNotEmpty()
  @IsArray()
  @IsOptional()
  profilesIds?: number[];
}
