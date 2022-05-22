import { IsPositive,IsNumber, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateLibDto {
 @IsPositive({message:"Numero deve ser positivo"})
 @IsNumber()
 @ApiProperty({
   description: "Avaliação do jogo",
   example: 1
  })
  rate: number;
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Descrição  do jogo",
    example: "As aventuras de dois irmãos encanadores que se aventuram em um mundo pixelado!"
   })
  gameDescription: string;
}
