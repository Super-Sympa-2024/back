import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';
import { EventType } from 'src/utils/event-type.enum';

export class Event {
  @ApiProperty()
  id: number;

  @ApiProperty()
  eventType: EventType;

  @ApiProperty()
  user: User;

  @ApiProperty()
  timestamp: Date;
}
