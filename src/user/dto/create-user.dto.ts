import { ApiProperty, ApiOperation } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome do Usuario',
    example: 'Henrique',
  })
  userName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'E-mail  do Usuario',
    example: 'ricao_matado@gmail.com',
  })
  email: string;


  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Numero do documento CPF do usuário ',
    example: '330.999.111-0',
  })
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{
    message: "Senha muito fraca"
  })
  @ApiProperty({
    description: 'Senha do Usuario',
    example: 'henrique_123lindo',
  })
  password: string;


  @ApiProperty({
    description: 'Confirmação da senha do Usuario',
    example: 'henrique_123lindo',
  })
  confirmPassword: string;

  @ApiProperty({
    description: 'Campo da entidade USER que irá reservar os perfis atrelados a um Usuario',
    example: 'henrique_123lindo',
  })
   profiles: string[];

  @ApiProperty({
    description:'Verifica se o ususário é um administrador',
    example: true
  })
  isAdmin: boolean

}
