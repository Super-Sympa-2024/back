import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EventService {
  constructor(private readonly prisma: PrismaService) {}
  
  create(createEventDto: CreateEventDto) {
    return this.prisma.event.create({
      data: createEventDto
    });
  }

  findAll() {
    return this.prisma.event.findMany();
  }

  findOne(id: number) {
    return this.prisma.event.findUnique({
      where: {
        id: id
      }
    });
  }

  findMyEvents(userId: number) {
    return this.prisma.event.findMany({
      where: {
        userId: userId
      },
      include: {
        user: true
      }
    })
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.prisma.event.update({
      where: {
        id: id
      },
      data: updateEventDto
    });
  }

  remove(id: number) {
    return this.prisma.event.delete({
      where: {
        id: id
      }
    });
  }
}
