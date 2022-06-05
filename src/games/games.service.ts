import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create.game.dto';
import { UpdateGameDto } from './dto/update.game.dto';
import { Game } from './entities/game.entitie';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createGameDto: CreateGameDto): Promise<Game> {
    const data: Prisma.GameCreateInput = {
      gameName: createGameDto.gameName,
      description: createGameDto.description,
      gameplayYouTubeUrl: createGameDto.gameplayYouTubeUrl,
      imdbScore: createGameDto.imdbScore,
      trailerYouTubeUrl: createGameDto.trailerYouTubeUrl,
      year: createGameDto.year,

      genre: {
        connect: {
          name: createGameDto.genreName,
        },
      },
    };
    return await this.prisma.game.create({
      data,
      select: {
      gameName:  true,
      description: true,
      gameplayYouTubeUrl:  true,
      imdbScore:  true,
      year:  true,
      trailerYouTubeUrl: true,
      genre:{
        select:{
          name: true
        }
      }
      }},
    );
  }
  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany({include:{genre:true}});
  }

  findOne(id: string): Promise<Game> {
    return this.prisma.game.findUnique({ where: { id }, include:{genre:true} });
  }
  update(id: string, updateGameDto: UpdateGameDto): Promise<Game> {
    const game = this.prisma.game.findUnique({
      where: { id },
      include: { genre: true },
    });
    if (game.genre[0].name == updateGameDto.genreName) {
      return this.prisma.game.update({
        where: { id },
        data: {
          gameName: updateGameDto.gameName,
          description: updateGameDto.description,
          gameplayYouTubeUrl: updateGameDto.gameplayYouTubeUrl,
          imdbScore: updateGameDto.imdbScore,
          trailerYouTubeUrl: updateGameDto.trailerYouTubeUrl,
          year: updateGameDto.year,

          genre: {
            disconnect: {
              name: updateGameDto.genreName,
            },
          },
        },
      });
    }
    else{
      return this.prisma.game.update({
        where: { id },
        data: {
          gameName: updateGameDto.gameName,
          description: updateGameDto.description,
          gameplayYouTubeUrl: updateGameDto.gameplayYouTubeUrl,
          imdbScore: updateGameDto.imdbScore,
          trailerYouTubeUrl: updateGameDto.trailerYouTubeUrl,
          year: updateGameDto.year,

          genre: {
            connect: {
              name: updateGameDto.genreName,
            },
          },
        },
      });
    }
  }

  async delete(id: string) {
    await this.prisma.game.delete({
      where: {
        id,
      },
    });
  }
}
