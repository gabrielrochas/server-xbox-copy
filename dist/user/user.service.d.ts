import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma.service";
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(user: Prisma.UserCreateInput): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    })[]>;
    findOne(id: number): Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    }>;
    update(id: number, user: Prisma.UserUpdateInput): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    remove(id: number): Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
