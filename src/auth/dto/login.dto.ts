import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto{
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:"Campo onde o usuário irá inserir seu e-mail para o login",
    example:"ricao_matado@gmail.com"
  })
  email: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description:"Campo onde o usuário irá inserir sua senha para o login",
    example:"Y7@4kkmv"
  })
  password: string;
}
