import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'deals' })
export class Deal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column()
  price: number;

  @Column()
  yield: string;

  @Column()
  sold: number;

  @Column()
  ticket_price: number;

  @Column()
  days_left: number;

  @Column()
  image: string;
}
