// src/modules/posts/dto/combined-post-update.dto.ts
import { IntersectionType } from '@nestjs/mapped-types';
import { UpdatePostDto } from './update-post.dto';
import { AdditionalPrivilegesDto } from './additional-privileges.dto';

export class CombinedPostUpdateDto extends IntersectionType(
  UpdatePostDto,
  AdditionalPrivilegesDto,
) {}