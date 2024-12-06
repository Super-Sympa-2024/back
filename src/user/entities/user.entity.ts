import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id?: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  @Exclude()
  password: string;
}
