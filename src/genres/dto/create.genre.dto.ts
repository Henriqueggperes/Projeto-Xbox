import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreateGenreDto {
  @ApiProperty({
    description:"Campo da entidade Genre que guarda o nome do gênero do jogo"
  })
  name: string
  @IsUUID(undefined, {each: true})
  @ApiProperty({
    description:"Campo da entidade Genre que guarda os jogos atrelados a um ou mais gêneros",
    example:"Tomb Raider, Counter Strike, Valorant..."
  })
  game?: string[]
}
