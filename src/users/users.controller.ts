import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('list')
  getUsers() {
    return this.usersService.getAllUsers();
  }

  @Public()
  @Post('create')
  async create(
    @Body()
    body: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
    },
  ): Promise<User> {
    const { firstName, lastName, email, password } = body;
    return this.usersService.createUser(firstName, lastName, email, password);
  }
}
