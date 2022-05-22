import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibModule } from './lib/lib.module';
import { GenresModule } from './genres/genres.module';
import { GamesController } from './games/games.controller';
import { GamesModule } from './games/games.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LibModule, GenresModule, GamesModule, PrismaModule],
  controllers: [AppController, GamesController],
  providers: [AppService],
})
export class AppModule {}
