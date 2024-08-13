import { Count } from 'src/counts/entities/count.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'text' })
  barcode: string;

  @Column({ type: 'integer' })
  amount: number;

  @OneToMany(() => Count, count => count.product)
  counts: Count[];
}
