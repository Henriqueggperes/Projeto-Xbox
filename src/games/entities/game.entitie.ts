import { Profile } from 'src/profile/entities/profile.entity';
import { Genre } from 'src/genres/entities/genre.entitie';

export class Game {
  id?: string;
  gameName: string;
  imdbScore: string;
  imageUrl: string;
  description: string;
  year: string;
  profiles?: Profile[];
  genre?: Genre[];
  trailerYouTubeUrl: string;
  gameplayYouTubeUrl: string;
}
