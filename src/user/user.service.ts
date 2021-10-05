import { CreateUserDto } from "./dto/create-user.dto";
import { Prisma } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    profiles: {
      select: {
        id: false,
        nickname: true,
        image: true,
      },
    },
  };

  create(dto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      ...dto,
      profiles: {
        create: dto.profiles,
      },
    };
    return this.prisma.user.create({
      data,
      include: this._include,
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include: { profiles: true },
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { profiles: true },
    });
  }

  update(id: number, user: Prisma.UserUpdateInput) {
    return this.prisma.user.update({
      where: { id },
      data: user,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
