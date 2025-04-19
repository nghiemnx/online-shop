import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('categories')
@Unique(['name'])
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'nvarchar', length: 50 })
  name: string;

  @Column({ type: 'nvarchar', length: 500, nullable: true })
  description?: string;
}
