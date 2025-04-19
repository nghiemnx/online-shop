import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('customers')
@Unique(['phoneNumber', 'email'])
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'nvarchar', length: 50 })
  firstName: string;

  @Column({ type: 'nvarchar', length: 50 })
  lastName: string;

  @Column({ type: 'varchar', length: 50 })
  phoneNumber: string;

  @Column({ type: 'nvarchar', length: 500 })
  address: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'datetime', nullable: true })
  birthday?: Date;
}
