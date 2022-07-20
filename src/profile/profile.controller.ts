import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { AuthGuard } from '@nestjs/passport';
import { User } from './../user/entities/user.entity';
import { LoggedUser } from 'src/auth/logged-user.decorator';

@ApiTags('Profile')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService){}

  @Get()//Metodo GET ALL
  @ApiOperation({
    summary: "Listar todos os perfis do usuário"
  })
  findAll(@LoggedUser() user: User) {
    return this.profileService.findAll(user);
  }

  @Post()//Metodo CREATE
  @ApiOperation({
    summary: "Criar um novo perfil"
  })
  create(@Body() createprofileDto: CreateProfileDto) {
    return this.profileService.create(createprofileDto);
  }

  @Get(':id')//Metodo GETBYID
  @ApiOperation({
    summary: "Listar um perfil escolhido pelo ID"
  })
  findOne(@Param('id') id:string) {
    return this.profileService.findOne(id);
  }

  @Patch(':id')//Metodo UPDATE BY ID
  @ApiOperation({
    summary: "Editar um perfil pelo ID"
  })
    update(@Param('id') id:string,@Body() updateProfileDto: UpdateProfileDto){
      return this.profileService.update(id,updateProfileDto)
    }

    @Delete(':id')//Metodo DELETEBYID
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
  summary: "Remover um perfil pelo ID"
  })
  delete(@Param('id') id:string){
    this.profileService.delete(id);
  }

}
