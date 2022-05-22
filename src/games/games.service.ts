import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create.game.dto';
import { Game } from './entities/game.entitie';

@Injectable()
export class GamesService {

 game: Game [] = [];

 constructor (private readonly prisma: PrismaService){}

  findAll(){
    return this.prisma;
  }

  create(createShopDto: CreateGameDto): Game {
    const game: Game = { id: 'id_aleatorio', ...createShopDto };
    this.game.push(game)
    return game;
  }
}

