import { PartialType } from "@nestjs/swagger";
import { CreateLibDto } from "./create.lib.dto";
import { ApiProperty } from "@nestjs/swagger";
export class UpdateLibDto extends PartialType(CreateLibDto){
  @ApiProperty({
    description: "Nome do jogo",
    example: "Super Mario"
   })
   name: string;
   @ApiProperty({
    description: "Descrição  do jogo",
    example: "As aventuras de dois irmãos encanadores que se aventuram em um mundo pixelado!"
   })
  gameDescription: string;
}
