import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create.game.dto';
import { UpdateGameDto } from './dto/update.game.dto';
import { Game } from './entities/game.entitie';

@Injectable()
export class GamesService {
  create(createGameDto: CreateGameDto): Promise<Game>  {
   const game: Game = {...createGameDto}
    return this.prisma.game.create({
      data: game,
    })
  }
  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany();
  }
  findOne(id: string): Promise<Game> {
    return this.prisma.game.findUnique({ where: { id } });
  }
  update(id: string, updateGameDto: UpdateGameDto): Promise<Game> {
    const data: Partial<Game> = { ...updateGameDto };

    return this.prisma.game.update({
      where: { id },
      data,
    });
  }
  constructor(private readonly prisma: PrismaService) {}

  async delete(id: string) {
    await this.prisma.game.delete({
      where: {
        id,
      },
    });
  }



}
