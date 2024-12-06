import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  ClassSerializerInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { User } from './entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOkResponse({ type: User })
  async findOne(@Param('id') id: string) {
    const user = await this.userService.findOne(+id);
    return new User(user);
  }

  @Patch(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.userService.update(+id, updateUserDto);
    return new User(user);
  }

  @Delete(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  async remove(@Param('id') id: string) {
    const user = await this.userService.remove(+id);
    return new User(user);
  }
}
