import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create.game.dto';
import { UpdateGameDto } from './dto/update.game.dto';
import { Game } from './entities/game.entitie';

@Injectable()
export class GamesService {
  create(createGameDto: CreateGameDto)  {
   const game: Game = {...createGameDto}
    return this.prisma.game.create({
      data: game,
    })
  }
  findAll() {
    return this.prisma.game.findMany();
  }
  findOne(id: string): Promise<Game> {
    throw new Error('Method not implemented.');
  }
  update(id: string, updateLibDto: UpdateGameDto): Promise<Game> {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}

  delete(id: string) {
    throw new Error('Method not implemented.');
  }



}
