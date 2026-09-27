// src/modules/posts/posts.controller.ts
import { Controller, Put, Param, Body } from '@nestjs/common';
import { CombinedPostUpdateDto } from './dto/combined-post-update.dto';

@Controller('posts')
export class PostsController {
  @Put(':id')
  updatePost(
    @Param('id') id: string,
    @Body() payload: CombinedPostUpdateDto,
  ) {
    return {
      message: `Đã cập nhật bài viết ID: ${id}`,
      receivedData: payload,
    };
  }
}