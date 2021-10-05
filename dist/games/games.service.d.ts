import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateGameDto } from "./dto/create-game.dto";
import { UpdateGameDto } from "./dto/update-game.dto";
export declare class GamesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateGameDto): Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        genres: {
            id: number;
            genre: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Game & {
        genres: {
            id: number;
            genre: string;
        }[];
    })[]>;
    findOne(id: number): Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        genres: {
            id: number;
            genre: string;
        }[];
    }>;
    update(id: number, data: UpdateGameDto): Prisma.Prisma__GameClient<import(".prisma/client").Game>;
    remove(id: number): Prisma.Prisma__GameClient<import(".prisma/client").Game>;
}
