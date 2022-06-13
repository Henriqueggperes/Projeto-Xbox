import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGameDto } from './dto/create.game.dto';
import { Game } from './entities/game.entitie';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateGameDto } from './dto/update.game.dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Games')
@UseGuards(AuthGuard())
@ApiBearerAuth()
@Controller('games')
export class GamesController {
  constructor(private readonly gameService: GamesService){}

  @Post()//Metodo CREATE
  @ApiOperation({
    summary: "Criar um jogo"
  })
    create(@Body() createGameDto: CreateGameDto) {
      return this.gameService.create(createGameDto);
    }

  @Get()//Metodo GETALL
  @ApiOperation({
    summary: "Listar todos os jogos"
  })
  findAll() {
    return this.gameService.findAll();
  }

  @Get(':id')//Metodo GETBYID
  @ApiOperation({
    summary: "Listar um jogo escolhido pelo ID"
  })
  findOne(@Param('id') id:string): Promise<Game> {
    return this.gameService.findOne(id);
  }

  @Patch(':id')//Metodo UPDATE BY ID
  @ApiOperation({
    summary: "Editar um jogo pelo ID"
  })
    update(@Param('id') id:string,@Body() updateLibDto: UpdateGameDto): Promise<Game>{
      return this.gameService.update(id,updateLibDto)
    }

  @Delete(':id')//Metodo DELETEBYID
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
  summary: "Remover um jogo pelo ID"
  })
  delete(@Param('id') id:string){
    this.gameService.delete(id);
  }
 }


