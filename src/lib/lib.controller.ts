import { Body, Controller, Get, Post } from '@nestjs/common';
import { LibService } from './lib.service';
import { CreateLibDto } from './dto/create.lib.dto';
import { Lib } from './entities/lib.entitie';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Library')
@Controller('lib')
export class LibController {

  constructor(private libService: LibService){}

  @Get()
  findAll():Lib[]{
    return this.libService.findAll();
  }

@Post()
  create(@Body() createShopDto: CreateLibDto): Lib{
    return this.libService.create(createShopDto);
  }
}
