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
    example: 'Y7@4kkmv',
  })
  password: string;


  @ApiProperty({
    description: 'Confirmação da senha do Usuario',
    example: 'Y7@4kkmv',
  })
  confirmPassword: string;
}
