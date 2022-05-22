import { IsPositive,IsNumber, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateGameDto {
  gameName: string
  gameRate: number
  gameRlDate: string
}
