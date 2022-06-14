import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/user/entities/user.entity';
import { CreateGenreDto } from './dto/create.genre.dto';
import { UpdateGenreDto } from './dto/update.genre.dto';
import { Genre } from './entities/genre.entitie';
@Injectable()
export class GenresService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Genre[]> {
    return this.prisma.genre.findMany({
      include: {
        game: true,
      },
    });
  }

  create(createGenreDto: CreateGenreDto, user: User): Promise<Genre> {
    if(!user.isAdmin){
      throw new UnauthorizedException('Você não tem acesso a este recurso')
    }
    const data: Prisma.GenreCreateInput = {
      name: createGenreDto.name,
    };
    return this.prisma.genre.create({
      data,
      select: {
        id: true,
        name: true,
      },
    });
  }

  findOne(id: string): Promise<Genre> {
    return this.prisma.genre.findUnique({ where: { id } });
  }

  update(id: string, dto: UpdateGenreDto): Promise<Genre> {
    const data: Partial<Genre> = { ...dto };

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
