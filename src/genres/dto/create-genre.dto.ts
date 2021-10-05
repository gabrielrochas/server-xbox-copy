import { IsString } from "class-validator";
import { Genres } from "../entities/genres.entity";

export class CreateGenreDto extends Genres {
  @IsString()
  genre: string;
}
