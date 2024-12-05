import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: createUserDto,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    // gérer erreurs !!
    return this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });
  }

  // me(id: number) {
  //   return this.prisma.user.findUnique({
  //     where: {
  //       id: id
  //     },
  //     include: {
  //       Event
  //     }
  //   })
  // }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: {
        id: id,
      },
    });
  }

  findOneByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: {
        username: username,
      },
    });
  }
}
