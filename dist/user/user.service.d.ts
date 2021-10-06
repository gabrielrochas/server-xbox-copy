import { CreateUserDto } from "./dto/create-user.dto";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(dto: CreateUserDto): Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: {
            id: number;
            nickname: string;
            image: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    })[]>;
    findOne(id: number): Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    }>;
    update(id: number, user: Prisma.UserUpdateInput): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    remove(id: number): Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
