import { Prisma } from "@prisma/client";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(user: Prisma.UserCreateInput): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    })[]>;
    findOne(id: string): Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    }>;
    update(id: string, user: Prisma.UserUpdateInput): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    remove(id: string): Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
