// src/modules/auth/dto/create-user.dto.ts
import { IsNotEmpty, Matches, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString({ message: 'Tên người dùng phải là chuỗi ký tự' })
  @IsNotEmpty({ message: 'Tên người dùng không được để trống' })
  username: string;

  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
    message: 'Mật khẩu phải chứa ít nhất 8 ký tự, gồm ít nhất 1 chữ hoa, 1 chữ thường và 1 chữ số',
  })
  password: string;

  @Matches(/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/, {
    message: 'Số điện thoại không đúng định dạng di động Việt Nam (ví dụ: 0987654321 hoặc +84987654321)',
  })
  phoneNumber: string;
}