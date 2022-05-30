import { User } from 'src/user/entities/user.entity';
import { Game } from 'src/games/entities/game.entitie';

export class Profile {
  id?: string;
  title?: string;
  User: User;
  Game: Game;
  userId: User;
  games?: Game[];
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
