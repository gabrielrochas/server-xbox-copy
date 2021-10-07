import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateUserDto): Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: {
            nickname: string;
            image: string;
            id: number;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        profiles: {
            nickname: string;
            image: string;
            id: number;
        }[];
    })[]>;
    findOne(id: number): Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: {
            nickname: string;
            image: string;
            id: number;
        }[];
    }>;
    update(id: number, data: UpdateUserDto): Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: {
            nickname: string;
            image: string;
            id: number;
        }[];
    }>;
    remove(id: number): Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
