import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { GenresService } from './genres.service';
import { CreateGenreDto } from './dto/create.genre.dto';
import { Genre } from './entities/genre.entitie';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateGenreDto } from './dto/update.genre.dto';

@ApiTags('Genres')
@Controller('genres')
export class GenresController {
  constructor(private readonly genreService: GenresService){}

  @Get()//Metodo GET ALL
  @ApiOperation({
    summary: "Listar todos os gêneros de jogos"
  })
  findAll() {
    return this.genreService.findAll();
  }

  @Post()//Metodo CREATE
  @ApiOperation({
    summary: "Criar um novo gênero"
  })
  create(@Body() createGenreDto: CreateGenreDto) {
    return this.genreService.create(createGenreDto);
  }

  @Get(':id')//Metodo GETBYID
  @ApiOperation({
    summary: "Listar um gênero escolhido pelo ID"
  })
  findOne(@Param('id') id:string){
    return this.genreService.findOne(id);
  }

  @Patch(':id')//Metodo UPDATE BY ID
  @ApiOperation({
    summary: "Editar um gênero pelo ID"
  })
    update(@Param('id') id:string,@Body() updateLibDto: UpdateGenreDto){
      return this.genreService.update(id,updateLibDto)
    }

    @Delete(':id')//Metodo DELETEBYID
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
  summary: "Remover um gênero pelo ID"
  })
  delete(@Param('id') id:string){
    this.genreService.delete(id);
  }

}
