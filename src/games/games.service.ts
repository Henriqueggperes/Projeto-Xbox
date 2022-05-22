import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create.game.dto';
import { Game } from './entities/game.entitie';

@Injectable()
export class GamesService {

 shop: Game [] = [];

  findAll(): Game[]{
    return this.shop;
  }

  create(createShopDto: CreateGameDto): Game {
    const game: Game = { id: 'id_aleatorio', ...createShopDto };
    this.shop.push(game)
    return game;
  }
}
