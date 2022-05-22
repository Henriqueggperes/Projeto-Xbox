import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLibDto } from './dto/create.lib.dto';
import { Lib} from './entities/lib.entitie';

@Injectable()
export class LibService {

  constructor (private readonly prisma: PrismaService){}

  findAll(){
    return this.prisma.lib.findMany();
  }

  create(createLibDto: CreateLibDto) {
    const Lib: Lib = {...createLibDto};

     return this.prisma.lib.create({
      data: Lib,
    });

  }
}
