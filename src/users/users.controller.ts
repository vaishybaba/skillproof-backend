import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth/jwt-auth.guard.js';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body()
    body: {
      name: string;
      email: string;
      password: string;
    },
  ) {
    return this.usersService.createUser(
      body.name,
      body.email,
      body.password,
    );
  }

 @UseGuards(JwtAuthGuard)
 @Get()
 async getUsers() {
  return this.usersService.getUsers();
  }
}
