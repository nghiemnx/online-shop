import { DataSource } from 'typeorm';
import { Order } from './order.entity';

export async function seedOrders(dataSource: DataSource) {
  const orderRepository = dataSource.getRepository(Order);

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
    },
  ];

  for (const order of orders) {
    const existingOrder = await orderRepository.findOneBy({
      description: order.description,
    });

    if (!existingOrder) {
      await orderRepository.save(order);
    }
  }

  return orders.length;
}
