import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UnprocessableEntityException,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { User } from './entities/user.entity';
import { LoggedUser } from 'src/auth/logged-user.decorator';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({
    summary: 'Criar um usuario',
  })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
}
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get()
  @ApiOperation({
    summary: 'Listar todos os usuarios',
  })
  findAll(@LoggedUser() user: User,) {
    return this.userService.findAll(user);
  }
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Get(':id')
  @ApiOperation({
    summary: 'Listar um usuario pelo ID',
  })
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um usuario pelo ID',
  })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {

    return this.userService.update(id, updateUserDto);
  }
  @UseGuards(AuthGuard())
  @ApiBearerAuth()
  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um usuario pelo ID ',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLine = errorLines[errorLines.length - 1]?.trim();

    if(!lastErrorLine){
      console.error(error);
    }

    throw new UnprocessableEntityException(
      lastErrorLine || "Algum erro ocrreu ao exucutar a operação"
      )

  }
}
