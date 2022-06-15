import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
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
