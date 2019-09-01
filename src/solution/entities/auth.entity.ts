import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name:'t_user' })
export class AuthUserEntity {
  @PrimaryColumn()
  id:number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  realname: string;

  @Column()
  state: number;
}
