// src/modules/posts/dto/update-post.dto.ts
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @IsNotEmpty({ message: 'Tiêu đề không được để trống' })
  title: string;

  @IsString()
  @IsOptional()
  content?: string;
}

// src/modules/posts/dto/additional-privileges.dto.ts
import { IsBoolean, IsString, IsNotEmpty } from 'class-validator';

export class AdditionalPrivilegesDto {
  @IsBoolean({ message: 'isPinned phải là kiểu boolean' })
  isPinned: boolean;

  @IsString()
  @IsNotEmpty({ message: 'moderatorNote không được để trống' })
  moderatorNote: string;
}