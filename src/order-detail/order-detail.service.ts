import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderDetail } from './entities/order-detail.entity';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@Injectable()
export class OrderDetailService {
  constructor(
    @InjectRepository(OrderDetail)
    private readonly orderDetailRepository: Repository<OrderDetail>,
  ) {}

  async createOrderDetail(createOrderDetailDto: CreateOrderDetailDto) {
    const orderDetail = this.orderDetailRepository.create(createOrderDetailDto);
    await this.orderDetailRepository.save(orderDetail);
    return { message: 'Order detail created successfully', data: orderDetail };
  }

  async getAllOrderDetails() {
    const orderDetails = await this.orderDetailRepository.find();
    return {
      message: 'Order details retrieved successfully',
      data: orderDetails,
    };
  }

  async getOrderDetailById(orderId: number, productId: number) {
    const orderDetail = await this.orderDetailRepository.findOneBy({
      orderId,
      productId,
    });
    if (!orderDetail) {
      throw new NotFoundException('Order detail not found');
    }
    return {
      message: 'Order detail retrieved successfully',
      data: orderDetail,
    };
  }

  async updateOrderDetail(
    orderId: number,
    productId: number,
    updateOrderDetailDto: UpdateOrderDetailDto,
  ) {
    const result = await this.orderDetailRepository.update(
      { orderId, productId },
      updateOrderDetailDto,
    );
    if (result.affected === 0) {
      throw new NotFoundException('Order detail not found');
    }
    const updatedOrderDetail = await this.orderDetailRepository.findOneBy({
      orderId,
      productId,
    });
    return {
      message: 'Order detail updated successfully',
      data: updatedOrderDetail,
    };
  }

  async deleteOrderDetail(orderId: number, productId: number) {
    const result = await this.orderDetailRepository.delete({
      orderId,
      productId,
    });
    if (result.affected === 0) {
      throw new NotFoundException('Order detail not found');
    }
    return { message: 'Order detail deleted successfully' };
  }
}
