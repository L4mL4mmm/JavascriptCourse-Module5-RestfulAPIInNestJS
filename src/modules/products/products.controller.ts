// src/modules/products/products.controller.ts
import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('products')
export class ProductsController {
  @Get(':id')
  getProductDetail(@Param('id') id: string, @Req() req: Request) {
    const baseUrl = `${req.protocol}://${req.get('host')}/products/${id}`;

    const product = {
      id,
      name: 'Bàn phím cơ không dây',
      price: 1500000,
      stock: 12,
    };

    return {
      data: product,
      _links: [
        {
          rel: 'self',
          href: baseUrl,
          action: 'GET',
          description: 'Xem chi tiết sản phẩm',
        },
        {
          rel: 'update',
          href: baseUrl,
          action: 'PUT',
          description: 'Cập nhật thông tin sản phẩm',
        },
        {
          rel: 'delete',
          href: baseUrl,
          action: 'DELETE',
          description: 'Xóa sản phẩm khỏi hệ thống',
        },
        {
          rel: 'buy',
          href: `${baseUrl}/checkout`,
          action: 'POST',
          description: 'Đặt mua sản phẩm',
        },
      ],
    };
  }
}