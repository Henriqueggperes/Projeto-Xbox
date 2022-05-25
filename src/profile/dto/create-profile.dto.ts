import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUrl } from "class-validator";

export class CreateProfileDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: "Campo da entidade Profile que reserva o titulo do perfil do usuário",
    example: "HenriquinhoBomDebala"
  })
  title: string;

  @ApiProperty({
    description:"Campo da entidade Profile que reserva a URL da imagem do perfil de um usuário",
    example:"https://i.kym-cdn.com/photos/images/newsfeed/002/336/945/e1c"

  })
  @IsUrl()
  imageUrl: string;

}
