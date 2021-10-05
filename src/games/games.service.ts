import { Prisma } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateGameDto } from "./dto/create-game.dto";

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateGameDto) {
    return this.prisma.game.create({ data });
  }

  findAll() {
    return this.prisma.game.findMany({
      include: { genres: true },
    });
  }

  findOne(id: number) {
    return this.prisma.game.findUnique({
      where: { id },
      include: { genres: true },
    });
  }

  update(id: number, game: Prisma.GameUpdateInput) {
    return this.prisma.game.update({
      where: { id },
      data: game,
    });
  }

  remove(id: number) {
    return this.prisma.game.delete({
      where: { id },
    });
  }
}
