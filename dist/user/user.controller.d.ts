import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User & {
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
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: {
            nickname: string;
            image: string;
            id: number;
        }[];
    }>;
    update(id: number, updateUserDto: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User & {
        profiles: {
            nickname: string;
            image: string;
            id: number;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
