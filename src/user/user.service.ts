import { Prisma } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

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
      include: this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: this._include,
    });
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id },
    });
  }
}
