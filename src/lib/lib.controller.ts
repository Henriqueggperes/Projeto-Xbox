import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { LibService } from './lib.service';
import { CreateLibDto } from './dto/create.lib.dto';
import { Lib } from './entities/lib.entitie';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateLibDto } from './dto/update.lib.dto';

@ApiTags('Library')
@Controller('lib')
export class LibController {

  constructor(private readonly libService: LibService){}

  @Get()
  @ApiOperation({
    summary: "Listar todos os jogos da biblioteca"
  })
  findAll(): Promise<Lib[]>{
    return this.libService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: "Listar um jogo na biblioteca escolhido pelo ID"
  })
  findOne(@Param('id') id:string): Promise<Lib> {
    return this.libService.findOne(id);
  }

@Post()
@ApiOperation({
  summary: "Criar um jogo para a biblioteca"
})
  create(@Body() createLibDto: CreateLibDto): Promise<Lib>{
    return this.libService.create(createLibDto);
  }

@Patch(':id')
@ApiOperation({
  summary: "Editar um jogo para a biblioteca pelo ID"
})
  update(@Param('id') id:string,@Body() updateLibDto: UpdateLibDto): Promise<Lib>{
    return this.libService.update(id,updateLibDto)
  }
@Delete(':id')
@HttpCode(HttpStatus.NO_CONTENT)
@ApiOperation({
summary: "Remover um jogo da biblioteca pelo ID"
})
delete(@Param('id') id:string){
  this.libService.delete(id);
}
}


