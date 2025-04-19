import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@Controller('order-details')
export class OrderDetailController {
  constructor(private readonly orderDetailService: OrderDetailService) {}

  @Post()
  createOrderDetail(@Body() createOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailService.createOrderDetail(createOrderDetailDto);
  }

  @Get()
  getAllOrderDetails() {
    return this.orderDetailService.getAllOrderDetails();
  }

  @Get(':orderId/:productId')
  getOrderDetailById(
    @Param('orderId') orderId: number,
    @Param('productId') productId: number,
  ) {
    return this.orderDetailService.getOrderDetailById(orderId, productId);
  }

  @Put(':orderId/:productId')
  updateOrderDetail(
    @Param('orderId') orderId: number,
    @Param('productId') productId: number,
    @Body() updateOrderDetailDto: UpdateOrderDetailDto,
  ) {
    return this.orderDetailService.updateOrderDetail(
      orderId,
      productId,
      updateOrderDetailDto,
    );
  }

  @Delete(':orderId/:productId')
  deleteOrderDetail(
    @Param('orderId') orderId: number,
    @Param('productId') productId: number,
  ) {
    return this.orderDetailService.deleteOrderDetail(orderId, productId);
  }
}
