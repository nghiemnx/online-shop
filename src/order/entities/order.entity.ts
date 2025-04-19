import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from '@/customer/entities/customer.entity';
import { Employee } from '@/employee/entities/employee.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdDate: Date;

  @Column({ type: 'datetime', nullable: true })
  shippedDate?: Date;

  @Column({ type: 'varchar', length: 50, default: 'WAITING' })
  status: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'nvarchar', length: 500 })
  shippingAddress: string;

  @Column({ type: 'nvarchar', length: 50 })
  shippingCity: string;

  @Column({ type: 'varchar', length: 20, default: 'CASH' })
  paymentType: string;

  @ManyToOne(() => Customer, (customer) => customer.id)
  customer: Customer;

  @ManyToOne(() => Employee, (employee) => employee.id)
  employee: Employee;
}
