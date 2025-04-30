import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Order } from '@/order/entities/order.entity';
import { Product } from '@/product/entities/product.entity';

@Entity('order_details')
export class OrderDetail {
  @PrimaryColumn()
  orderId: number;

  @PrimaryColumn()
  productId: number;

  @Column({ type: 'decimal', precision: 18, scale: 2 })
  quantity: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, nullable: true })
  price: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, default: 0 })
  discount: number;

  @ManyToOne(() => Order, (order) => order.id)
  order: Order;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;
}
