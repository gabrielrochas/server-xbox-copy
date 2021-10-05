import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { PrismaModule } from "./prisma/prisma.module";
import { GamesModule } from './games/games.module';

@Module({
  imports: [UserModule, PrismaModule, GamesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
