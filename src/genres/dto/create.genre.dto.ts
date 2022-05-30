import { ApiProperty } from "@nestjs/swagger";

export class CreateGenreDto {
  @ApiProperty({
    description:"Campo da entidade Genre que guarda o nome do gênero do jogo"
  })
  name: string

  @ApiProperty({
    description:"Campo da entidade Genre que guarda os jogos atrelados a um ou mais gêneros",
    example:"Tomb Raider, Counter Strike, Valorant..."
  })
  game?: string[]
}
