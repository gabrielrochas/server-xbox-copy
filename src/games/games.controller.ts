import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { GamesService } from "./games.service";

@Controller("games")
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  create(@Body() game: Prisma.GameCreateInput) {
    return this.gamesService.create(game);
  }

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.gamesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() game: Prisma.GameUpdateInput) {
    return this.gamesService.update(+id, game);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.gamesService.remove(+id);
  }
}
