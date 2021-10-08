import { IsInt, IsString } from "class-validator";
import { CreateGenreDto } from "./create-genre.dto";

export class UpdateGenreDto extends CreateGenreDto {
  @IsInt()
  id: number;

  @IsString()
  genres: string;
}
