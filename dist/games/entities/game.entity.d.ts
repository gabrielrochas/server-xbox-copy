import { Genres } from "src/genres/entities/genres.entity";
export declare class Game {
    id?: never;
    title: string;
    cover: string;
    description: string;
    launchYear: string;
    imdbRating: number;
    youtubeUrl: string;
    gamePlayUrl: string;
    genres?: Genres[];
}
