import { IsString, IsUUID } from "class-validator";

export class CreateGameGenreDto{
  @IsUUID()
  @IsString()
  gameId: string
}
