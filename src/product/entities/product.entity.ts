import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from '@/category/entities/category.entity';
import { Supplier } from '@/supplier/entities/supplier.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @Column({ type: 'decimal', precision: 18, scale: 2 })
  price: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, default: 0 })
  discount: number;

  @Column({ type: 'decimal', precision: 18, scale: 2, default: 0 })
  stock: number;

  @ManyToOne(() => Category, (category) => category.id)
  category: Category;

  @ManyToOne(() => Supplier, (supplier) => supplier.id)
  supplier: Supplier;

  @Column({ type: 'text', nullable: true })
  description?: string;
}
