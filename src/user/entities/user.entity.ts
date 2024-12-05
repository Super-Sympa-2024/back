import { ApiProperty } from '@nestjs/swagger';

export class User {
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id?: number;

  @ApiProperty()
  username: string;
}
