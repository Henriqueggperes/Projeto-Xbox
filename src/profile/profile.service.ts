import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.profile.findMany();
  }

 async create(createProfileDto: CreateProfileDto) {
    const data: Prisma.ProfileCreateInput = {
      User: {
        connect: {
          id: createProfileDto.userId,

        },
      },

      Games: {
        connect: createProfileDto.games.map((gameId) => ({
          id: gameId,
        })),
      },

      title: createProfileDto.title,
      imageUrl:createProfileDto.imageUrl
    };

     return this.prisma.profile.create({
      data,
      select: {
        id: true,
        imageUrl: true,
        title: true,
        userId: true,
        User: {
          select: {
            userName: true,
          },
        },
        Games:{
          select:{
            id: true,
          }
        },

      },
    });
  }

  findOne(id: string) {
    return this.prisma.profile.findUnique({ where: { id }});
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const data: Prisma.ProfileCreateInput = {
      User: {
        connect: {
          id: updateProfileDto.userId,

        },
      },

      Games: {
        connect: updateProfileDto.games.map((gameId) => ({
          id: gameId,
        })),
      },

      title: updateProfileDto.title,
      imageUrl:updateProfileDto.imageUrl
    };

    return this.prisma.profile.update({
      where: { id },
      data,
      select: {
        id: true,
        imageUrl: true,
        title: true,
        userId: true,
        User: {
          select: {
            userName: true,
          },
        },
        Games:{
          select:{
            id: true,
          }
        },

      },
    });
  }
  async delete(id: string) {
    await this.prisma.profile.delete({
      where: {
        id,
      },
    });
  }
}
