import { Game } from "../entities/game.entity";
export declare class CreateGameDto extends Game {
    title: string;
    cover: string;
    description: string;
    launchYear: string;
    imdbRating: number;
    youtubeUrl: string;
    gamePlayUrl: string;
}
