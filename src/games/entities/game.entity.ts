import { Genre } from 'src/genres/entities/genres.entity';
import { Profile } from 'src/profiles/entities/profile.entity';

export class Game {
  id?: number;
  title: string;
  cover: string;
  description: string;
  launchYear: string;
  imdbRating: number;
  youtubeUrl: string;
  gamePlayUrl: string;
  genres?: Genre[];
  profiles?: Profile[];
}
