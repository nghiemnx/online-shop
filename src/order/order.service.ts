/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { isPositiveInteger } from '@/common/helper/digits';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  private successResponse<T>(message: string, data?: T) {
    return {
      statusCode: 200,
      message,
      data,
    };
  }

  async createOrder(orderDto: CreateOrderDto) {
    const order = this.orderRepository.create(orderDto as DeepPartial<Order>);
    await this.orderRepository.save(order);
    return this.successResponse('Order created successfully', order);
  }

  async getAllOrders() {
    const orders = await this.orderRepository.find();
    return this.successResponse('Orders retrieved successfully', orders);
  }

  async getOrderById(id: number) {
    if (!isPositiveInteger(id)) {
      throw new NotFoundException(`Invalid order ID`);
    }
    const order = await this.orderRepository.findOneBy({ id });
    if (!order) {
      throw new NotFoundException(`Order not found`);
    }
    return this.successResponse('Order retrieved successfully', order);
  }

  async updateOrder(id: number, orderDto: UpdateOrderDto) {
    if (!isPositiveInteger(id)) {
      throw new NotFoundException(`Invalid order ID`);
    }
    const result = await this.orderRepository.update(
      id,
      orderDto as DeepPartial<Order>,
    );
    if (result.affected === 0) {
      throw new NotFoundException(`Order not found`);
    }
    const updatedOrder = await this.orderRepository.findOneBy({ id });
    return this.successResponse('Order updated successfully', updatedOrder);
  }

  async deleteOrder(id: number) {
    const result = await this.orderRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Order not found`);
    }
    return this.successResponse('Order deleted successfully');
  }
}
