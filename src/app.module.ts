import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenresModule } from './genres/genres.module';
import { GamesModule } from './games/games.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { AuthModule } from './auth/auth.module';
import { HomepageModule } from './homepage/homepage.module';
@Module({
  imports: [GenresModule, GamesModule, PrismaModule, UserModule, ProfileModule, AuthModule, HomepageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
