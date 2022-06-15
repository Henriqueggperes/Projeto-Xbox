import { Module } from '@nestjs/common';
import { HomepageService } from './homepage.service';
import { HomepageController } from './homepage.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { ProfileService } from 'src/profile/profile.service';
import { GenresService } from 'src/genres/genres.service';

@Module({
  imports: [PrismaModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [HomepageController],
  providers: [HomepageService,ProfileService,GenresService],
})
export class HomepageModule {}
