import { Prisma } from "@prisma/client";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./user.service";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: {
            id: number;
            nickname: string;
            image: string;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    })[]>;
    findOne(id: string): Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: import(".prisma/client").Profile[];
    }>;
    update(id: string, user: Prisma.UserUpdateInput): Prisma.Prisma__UserClient<import(".prisma/client").User>;
    remove(id: string): Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
