import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
@Injectable()
export class ProfileService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Profile[]> {
    return this.prisma.profile.findMany();
  }

  create(createProfileDto: CreateProfileDto): Promise<Profile> {
    const Profile: Profile = { ...createProfileDto };
    return this.prisma.profile.create({
      data: Profile,
    });
  }

  findOne(id: string): Promise<Profile> {
    return this.prisma.profile.findUnique({ where: { id } });
  }

  update(id: string, updateProfileDto: UpdateProfileDto): Promise<Profile> {
    const data: Partial<Profile> = { ...updateProfileDto };

    return this.prisma.profile.update({
      where: { id },
      data,
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

