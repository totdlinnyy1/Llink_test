import {Field, ObjectType} from '@nestjs/graphql'
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm'

@Entity('jokes')
@ObjectType()
export class JokeEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  joke_id: number

  @Field(() => String)
  @Column()
  id!: string

  @Field(() => String)
  @Column()
  url!: string

  @Field(() => String)
  @Column()
  icon_url!: string

  @Field(() => String)
  @Column()
  value!: string

  @Field(() => [String])
  @Column('text', {array: true})
  categories!: string[]
}
