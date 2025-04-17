import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  customerID: string;

  @Column({ length: 40 })
  companyName: string;

  @Column({ length: 30, nullable: true })
  contactName?: string;

  @Column({ length: 30, nullable: true })
  contactTitle?: string;

  @Column({ length: 60, nullable: true })
  address?: string;

  @Column({ length: 15, nullable: true })
  city?: string;

  @Column({ length: 15, nullable: true })
  region?: string;

  @Column({ length: 10, nullable: true })
  postalCode?: string;

  @Column({ length: 15, nullable: true })
  country?: string;

  @Column({ length: 24, nullable: true })
  phone?: string;

  @Column({ length: 24, nullable: true })
  fax?: string;
}
