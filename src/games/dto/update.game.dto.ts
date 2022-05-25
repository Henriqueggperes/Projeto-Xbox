import { PartialType } from "@nestjs/swagger";
import { CreateGameDto } from "./create.game.dto";
import { ApiProperty } from "@nestjs/swagger";
export class UpdateGameDto extends PartialType(CreateGameDto){

  @ApiProperty({
    example: "Mineirinho Adventures"
  })
   gameName: string
   @ApiProperty({
     example: 5
   })
   gameRate: number
}
