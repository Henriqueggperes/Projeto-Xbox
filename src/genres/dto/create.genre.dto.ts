import { ApiProperty } from "@nestjs/swagger";

export class CreateGenreDto {
  @ApiProperty({
    description:"Campo da entidade Genre que guarda o nome do gênero do jogo"
  })
  name: string
}
