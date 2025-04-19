/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { DataSource } from 'typeorm';
import { Order } from './order.entity';
import { OrderDetail } from '@/order-detail/entities/order-detail.entity';

export async function seedOrders(dataSource: DataSource) {
  const orderRepository = dataSource.getRepository(Order);
  const orderDetailRepository = dataSource.getRepository(OrderDetail);

  const orders = [
    {
      createdDate: new Date(),
      shippedDate: new Date(),
      status: 'SHIPPED',
      description: 'Order for electronics',
      shippingAddress: '123 Nguyen Trai, District 1',
      shippingCity: 'Ho Chi Minh City',
      paymentType: 'CREDIT_CARD',
      customer: { id: 1 },
      employee: { id: 1 },
      orderDetails: [
        { productId: 1, quantity: 2, price: 500 },
        { productId: 2, quantity: 1, price: 300 },
      ],
    },
    {
      createdDate: new Date(),
      shippedDate: new Date(),
      status: 'WAITING',
      description: 'Order for clothing',
      shippingAddress: '456 Le Loi, District 3',
      shippingCity: 'Ho Chi Minh City',
      paymentType: 'CASH',
      customer: { id: 2 },
      employee: { id: 2 },
      orderDetails: [
        { productId: 3, quantity: 3, price: 50 },
        { productId: 4, quantity: 2, price: 100 },
      ],
    },
    {
      createdDate: new Date(),
      shippedDate: new Date(),
      status: 'DELIVERED',
      description: 'Order for home appliances',
      shippingAddress: '789 Tran Hung Dao, District 5',
      shippingCity: 'Ho Chi Minh City',
      paymentType: 'PAYPAL',
      customer: { id: 3 },
      employee: { id: 3 },
      orderDetails: [
        { productId: 5, quantity: 1, price: 1000 },
        { productId: 6, quantity: 1, price: 700 },
      ],
    },
    {
      createdDate: new Date(),
      shippedDate: new Date(),
      status: 'SHIPPED',
      description: 'Order for books',
      shippingAddress: '12 Phan Dinh Phung, District 1',
      shippingCity: 'Ho Chi Minh City',
      paymentType: 'CREDIT_CARD',
      customer: { id: 4 },
      employee: { id: 4 },
      orderDetails: [
        { productId: 7, quantity: 5, price: 20 },
        { productId: 8, quantity: 3, price: 15 },
      ],
    },
    {
      createdDate: new Date(),
      shippedDate: new Date(),
      status: 'WAITING',
      description: 'Order for toys',
      shippingAddress: '34 Hai Ba Trung, District 3',
      shippingCity: 'Ho Chi Minh City',
      paymentType: 'CASH',
      customer: { id: 5 },
      employee: { id: 5 },
      orderDetails: [
        { productId: 9, quantity: 4, price: 25 },
        { productId: 10, quantity: 2, price: 30 },
      ],
    },
  ];

  for (const order of orders) {
    const existingOrder = await orderRepository.findOneBy({
      description: order.description,
    });

    if (!existingOrder) {
      const orderRecord = await orderRepository.save(order);
      for (const detail of order.orderDetails) {
        const orderDetail = orderDetailRepository.create({
          ...detail,
          orderId: orderRecord.id,
        });
        await orderDetailRepository.save(orderDetail);
      }
    }
  }

  return orders.length;
}
