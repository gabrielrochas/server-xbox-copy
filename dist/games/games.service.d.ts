import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateGameDto } from "./dto/create-game.dto";
export declare class GamesService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateGameDto): Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        genres: {
            genre: string;
            id: number;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Game & {
        genres: {
            genre: string;
            id: number;
        }[];
    })[]>;
    findOne(id: number): Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        genres: {
            genre: string;
            id: number;
        }[];
    }>;
    update(id: number, data: Prisma.GameUpdateInput): Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        genres: {
            genre: string;
            id: number;
        }[];
    }>;
    remove(id: number): Prisma.Prisma__GameClient<import(".prisma/client").Game>;
}
