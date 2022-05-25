import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './entities/profile.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateProfileDto } from './dto/update-profile.dto';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService){}

  @Get()//Metodo GET ALL
  @ApiOperation({
    summary: "Listar todos os perfis do usuário"
  })
  findAll() {
    return this.profileService.findAll();
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
  findOne(@Param('id') id:string): Promise<Profile> {
    return this.profileService.findOne(id);
  }

  @Patch(':id')//Metodo UPDATE BY ID
  @ApiOperation({
    summary: "Editar um perfil pelo ID"
  })
    update(@Param('id') id:string,@Body() updateProfileDto: UpdateProfileDto): Promise<Profile>{
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
