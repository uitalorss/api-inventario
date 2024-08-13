import { Product } from 'src/products/entities/product.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('counts')
export class Count {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @ManyToOne(() => Product, product => product.counts, {
    cascade: true,
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => User, user => user.counts, {
    cascade: true,
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ type: 'text' })
  batch: string;

  @Column({ type: 'timestamptz' })
  expiresIn: Date;

  @Column({ type: 'text', nullable: true })
  locate: string;

  @Column({ type: 'integer' })
  amount: number;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
}
