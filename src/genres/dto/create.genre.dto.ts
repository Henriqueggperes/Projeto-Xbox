import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class CreateGenreDto {
  @ApiProperty({
    description:"Campo da entidade Genre que guarda o nome do gênero do jogo"
  })
  name: string
}
