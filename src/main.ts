// src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,              // Tự động gạt bỏ trường không khai báo trong DTO
      forbidNonWhitelisted: true,  // Báo lỗi nếu client truyền thừa field
      transform: true,              // Tự động ép kiểu (hỗ trợ Bài 2: Query Params)
    }),
  );

  await app.listen(3000);
}
bootstrap();