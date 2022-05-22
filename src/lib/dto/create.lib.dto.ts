import { IsPositive,IsNumber, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLibDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
   description: "Nome do jogo",
   example: "Super Mario"
  })
  name: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Descrição  do jogo",
    example: "As aventuras de dois irmãos encanadores que se aventuram em um mundo pixelado!"
   })
  gameDescription: string;
}
