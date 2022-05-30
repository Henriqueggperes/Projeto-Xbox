import { Injectable } from '@nestjs/common';
import { Game } from 'src/games/entities/game.entitie';
import { Genre } from 'src/genres/entities/genre.entitie';
import { Favorito } from 'src/favoritos/entities/favorito.entity';
import { Profile } from 'src/profile/entities/profile.entity';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class HomepageService {

  constructor(private readonly prisma: PrismaService) {}


  findAll() {
  }
}
