import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { PrismaModule } from "./prisma/prisma.module";
import { GamesModule } from "./games/games.module";
import { GenresModule } from "./genres/genres.module";
@Module({
  imports: [UserModule, PrismaModule, GamesModule, GenresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
