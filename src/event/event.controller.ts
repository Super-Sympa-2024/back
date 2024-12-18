import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, UseGuards
} from "@nestjs/common";
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { JwtAuthGuard } from "../auth/jwt/jwt-auth.guard";
import { ApiOkResponse } from "@nestjs/swagger";
import { EventType } from "@prisma/client";

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Get("type/:eventType")
  findByEventType(@Param('event-type') eventType: string) {
    return this.eventService.findByEventType(eventType as EventType)
  }

  @Get('me/:userId')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  findMyEvents(@Param('userId') userId: string) {
    return this.eventService.findMyEvents(+userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
