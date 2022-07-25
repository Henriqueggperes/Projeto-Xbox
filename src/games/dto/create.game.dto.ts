import { IsPositive, IsNumber, IsNotEmpty, IsString } from 'class-validator';
import { ApiOperation, ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Campo onde a entidade Game irá reservar o nome do jogo',
    example: 'Mineirinho Adventures',
  })
  gameName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Campo onde a entidade Game irá reservar a descrição do jogo',
    example: 'Jogo incrivel e mineiro, e adventures',
  })
  description: string;

  @IsPositive()
  @IsNumber()
  @ApiProperty({
    description: 'Campo onde a entidade Game irá reservar a avaliação do jogo',
    example: 5,
  })
  imdbScore: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description:
      'Campo onde a entidade Game irá reservar a data de lançamento do jogo',
    example: '22/02/2022',
  })
  year: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description:
      'Campo onde a entidade Game irá reservar a URL de um trailer do jogo',
    example: 'https://www.youtube.com/watch?v=wHqKkiHlvJc',
  })
  trailerYouTubeUrl: string;


  @IsString()
  @ApiProperty({
    description:
      'Campo da entidade que irá reservar o gênero atrelado a um jogo',
    example: 'Ação',
  })
  genreName: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description:
      'Campo onde a entidade Game irá reservar a URL de uma gameplay do jogo',
    example: 'https://www.youtube.com/watch?v=NPl2N9eQOn4',
  })
  gameplayYouTubeUrl: string;
}
