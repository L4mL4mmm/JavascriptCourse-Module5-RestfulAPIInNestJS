// src/modules/pagination/pagination.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { PaginationDto } from './dto/pagination.dto';

@Controller('items')
export class PaginationController {
  @Get()
  getItems(@Query() query: PaginationDto) {
    return {
      parsedQuery: {
        page: query.page,
        limit: query.limit,
        isPageNumber: typeof query.page === 'number', // Trả về true
        isLimitNumber: typeof query.limit === 'number', // Trả về true
        sortBy: query.sortBy,
        sortOrder: query.sortOrder.toUpperCase(),
      },
    };
  }
}