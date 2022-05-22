import { IsPositive,IsNumber, IsNotEmpty, IsString } from "class-validator";
import { ApiOperation, ApiProperty } from "@nestjs/swagger";

export class CreateGameDto {
 @IsNotEmpty()
 @IsString()
 @ApiProperty({
   example: "Mineirinho Adventures"
 })
  gameName: string
  @IsPositive()
  @IsNumber()
  @ApiProperty({
    example: 5
  })
  gameRate: number
}
