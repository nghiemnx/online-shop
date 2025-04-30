/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeepPartial } from 'typeorm';
import { Order } from './entities/order.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { isPositiveInteger } from '@/common/helper/digits';
import { OrderDetail } from '@/order-detail/entities/order-detail.entity';

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
    const { orderDetails, ...orderData } = orderDto;

    // Create and save the order
    const order = this.orderRepository.create(orderData as DeepPartial<Order>);
    await this.orderRepository.save(order);

    // Validate and save order details
    if (orderDetails && Array.isArray(orderDetails)) {
      const orderDetailRepository =
        this.orderRepository.manager.getRepository(OrderDetail);
      for (const detail of orderDetails) {
        const orderDetail = orderDetailRepository.create({
          ...detail,
          orderId: order.id,
        });
        await orderDetailRepository.save(orderDetail);
      }
    }

    return this.successResponse('Order created successfully', order);
  }

  async getAllOrders() {
    const orders = await this.orderRepository.find({
      loadRelationIds: {
        relations: ['employee', 'customer'],
      },
    });
    return this.successResponse(
      'Orders retrieved successfully',
      orders.map(({ employee, customer, ...o }) => ({
        ...o,
        employeeId: employee,
        customerId: customer,
      })),
    );
  }

  async getOrderById(id: number) {
    if (!isPositiveInteger(id)) {
      throw new BadRequestException(`Invalid order ID`);
    }
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['employee', 'customer'],
    });
    if (!order) {
      throw new NotFoundException(`Order not found`);
    }

    const orderDetailRepository =
      this.orderRepository.manager.getRepository(OrderDetail);
    const orderDetails = await orderDetailRepository.find({
      where: { orderId: id },
      relations: ['product', 'product.category', 'product.supplier'],
    });

    order.orderDetails = orderDetails;

    if (!order) {
      throw new NotFoundException(`Order not found`);
    }
    return this.successResponse('Order retrieved successfully', order);
  }

  async updateOrder(id: number, orderDto: UpdateOrderDto) {
    if (!isPositiveInteger(id)) {
      throw new BadRequestException(`Invalid order ID`);
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
