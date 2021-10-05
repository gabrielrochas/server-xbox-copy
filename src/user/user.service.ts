import { Prisma } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(user: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: user });
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
