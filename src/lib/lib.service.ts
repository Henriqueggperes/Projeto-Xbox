import { Injectable } from '@nestjs/common';
import { CreateLibDto } from './dto/create.lib.dto';
import { Lib} from './entities/lib.entitie';

@Injectable()
export class LibService {

 lib: Lib [] = [];

  findAll(): Lib[]{
    return this.lib;
  }

  create(createLibDto: CreateLibDto): Lib {
    const Lib: Lib = { id: 'id_aleatorio', ...createLibDto };
    this.lib.push(Lib)
    return Lib;
  }
}
