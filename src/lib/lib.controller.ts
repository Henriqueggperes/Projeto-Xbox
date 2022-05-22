import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LibService } from './lib.service';
import { CreateLibDto } from './dto/create.lib.dto';
import { Lib } from './entities/lib.entitie';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

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
  create(@Body() createShopDto: CreateLibDto): Promise<Lib>{
    return this.libService.create(createShopDto);
  }
}
