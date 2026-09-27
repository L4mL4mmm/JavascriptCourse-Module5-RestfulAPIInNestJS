// src/modules/users/users.controller.ts
import {
  Controller,
  Post,
  Param,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('users')
export class UsersController {
  @Post(':id/avatar')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: diskStorage({
        destination: './uploads/avatars',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExtension = extname(file.originalname);
          callback(null, `avatar-user-${req.params.id}-${uniqueSuffix}${fileExtension}`);
        },
      }),
    }),
  )
  uploadAvatar(
    @Param('id') id: string,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          // 1. Giới hạn dung lượng tối đa 2MB (2 * 1024 * 1024 bytes)
          new MaxFileSizeValidator({
            maxSize: 2 * 1024 * 1024,
            message: 'Dung lượng file tải lên không được vượt quá 2MB',
          }),
          // 2. Chỉ cho phép định dạng ảnh .jpg, .jpeg, .png
          new FileTypeValidator({
            fileType: /(image\/jpeg|image\/png)$/,
          }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    return {
      message: 'Tải lên ảnh đại diện thành công',
      userId: id,
      fileInfo: {
        filename: file.filename,
        path: file.path,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        mimeType: file.mimetype,
      },
    };
  }
}