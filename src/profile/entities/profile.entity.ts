import { User } from 'src/user/entities/user.entity';
import { Game } from 'src/games/entities/game.entitie';

export class Profile {
  id?: string;
  title?: string;
  userId?: User;
  games?: Game[];
  imageUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
