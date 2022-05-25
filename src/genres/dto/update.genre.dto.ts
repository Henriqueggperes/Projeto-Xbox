import { PartialType } from "@nestjs/swagger";
import { CreateGenreDto } from "./create.genre.dto";
import { ApiProperty } from "@nestjs/swagger";
export class UpdateGenreDto extends PartialType(CreateGenreDto){
}
