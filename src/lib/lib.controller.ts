import { Body, Controller, Get, Post } from '@nestjs/common';
import { LibService } from './lib.service';
import { CreateLibDto } from './dto/create.lib.dto';
import { Lib } from './entities/lib.entitie';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Library')
@Controller('lib')
export class LibController {

  constructor(private readonly libService: LibService){}

  @Get()
  findAll(){
    return this.libService.findAll();
  }

@Post()
  create(@Body() createShopDto: CreateLibDto){
    return this.libService.create(createShopDto);
  }
}
 