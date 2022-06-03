import { BadRequestException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";
import * as bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";
import { Profile } from "src/profile/entities/profile.entity";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {
  }

  private userSelect = {
    id: true,
    userName: true,
    email: true,
    password: false,
    cpf: true,
    createdAt: true,
    updatedAt: true,
    isAdmin: true
  };

  findAll() {
    return this.prisma.user.findMany({
      select: this.userSelect

    });

  }

  async create(dto: CreateUserDto): Promise<User> {
    if (dto.password != dto.confirmPassword) {
      throw new BadRequestException("As senhas informadas não são iguais.");
    }

    delete dto.confirmPassword;

    const data: Prisma.UserCreateInput = {
      cpf: dto.cpf,
      email: dto.email,
      isAdmin: dto.isAdmin,
      userName: dto.userName,
      profiles: {
        create: {
          title: dto.userName,
          imageUrl: "https://thumbs.dreamstime.com/b/perfil-de-usu%C3%A1rio-do-vetor-avatar-padr%C3%A3o-179376714.jpg"
        }
      },


      password: await bcrypt.hash(dto.password, 10)
    };

    return this.prisma.user
      .create({
        data,
        select: this.userSelect
      });
  }

  findOne(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id }, select: this.userSelect });
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findOne(id);

    if (dto.password) {
      if (dto.password != dto.confirmPassword) {
        throw new BadRequestException("As senhas informadas não são iguais.");
      }
    }

    delete dto.confirmPassword;

    const data: Partial<User> = { ...dto };

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user
      .update({
        where: { id },
        data,
        select: this.userSelect
      });

  }

  async delete(id: string) {
    await this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}
