// src/modules/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() dto: CreateUserDto) {
    return {
      message: 'Đăng ký tài khoản thành công',
      data: { username: dto.username, phoneNumber: dto.phoneNumber },
    };
  }
}