import { Count } from 'src/counts/entities/count.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  nome: string;

  @OneToMany(() => Count, count => count.user)
  counts: Count[];
}
