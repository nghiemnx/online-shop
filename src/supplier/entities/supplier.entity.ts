import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('suppliers')
@Unique(['email', 'phoneNumber'])
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'nvarchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 50 })
  email: string;

  @Column({ type: 'varchar', length: 50 })
  phoneNumber: string;

  @Column({ type: 'nvarchar', length: 500 })
  address: string;
}
