import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create.genre.dto';
import { CreateGameGenreDto } from './dto/create.game-genre.dto';
import { UpdateGenreDto } from './dto/update.genre.dto';
import { Genre } from './entities/genre.entitie';
@Injectable()
export class GenresService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }

  create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const data: Prisma.GenreCreateInput = {
      
      name: createGenreDto.name,
      game: {
        connect: createGenreDto.game.map((gameId) => ({
          id: gameId,
        })),
      },
    };
    return this.prisma.genre.create({
      data,
      select: {
        id: true,
        name: true,
        game: {
          select: {
            id: true,
            gameName: true,
          },
        },
      },
    });
  }

  findOne(id: string): Promise<Genre> {
    return this.prisma.genre.findUnique({ where: { id } });
  }

  update(id: string, updateGameDto: UpdateGenreDto): Promise<Genre> {
    const data: Partial<Genre> = { ...updateGameDto };

    return this.prisma.genre.update({
      where: { id },
      data,
    });
  }
  async delete(id: string) {
    await this.prisma.genre.delete({
      where: {
        id,
      },
    });
  }
}
