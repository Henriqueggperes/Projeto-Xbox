import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';

@Module({
  imports: [PrismaModule,PassportModule.register({defaultStrategy: 'jwt'})],
  providers: [GamesService],
  controllers: [GamesController]
})
export class GamesModule {}
 //CONFIGURANDO A ENTIDADE GAMES E SEU CRUD
