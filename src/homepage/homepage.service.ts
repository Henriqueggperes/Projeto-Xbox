import { Injectable } from '@nestjs/common';
import { Genre } from 'src/genres/entities/genre.entitie';
import { PrismaService } from 'src/prisma/prisma.service';
import { Profile } from 'src/profile/entities/profile.entity';
import { User } from 'src/user/entities/user.entity';


@Injectable()
export class HomepageService {
  constructor (private  readonly prisma: PrismaService){}
  async allInfo(user: User){
    const userId = user.id
    const profile = await this.prisma.profile.findUnique({where:{userId}, include:{Games:true}});
    const favs = profile.Games;

    const genre = await this.prisma.genre.findMany({include:{game:true}})


    return [favs,genre] ;

  }
}
