// src/modules/pagination/dto/pagination.dto.ts
import { IsOptional, IsInt, Min, Max, IsString, IsIn } from 'class-validator';
import { Type } from 'class-transformer';

export class PaginationDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Trang phải là số nguyên' })
  @Min(1, { message: 'Trang phải lớn hơn hoặc bằng 1' })
  page: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt({ message: 'Limit phải là số nguyên' })
  @Min(1)
  @Max(100, { message: 'Mỗi lần lấy tối đa 100 bản ghi' })
  limit: number = 10;

  @IsOptional()
  @IsString()
  sortBy: string = 'createdAt';

  @IsOptional()
  @IsIn(['ASC', 'DESC', 'asc', 'desc'], {
    message: 'sortOrder chỉ nhận ASC hoặc DESC',
  })
  sortOrder: 'ASC' | 'DESC' | 'asc' | 'desc' = 'DESC';
}