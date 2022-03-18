import {Field, ObjectType} from '@nestjs/graphql'
import {BaseEntity, Column, Entity, PrimaryColumn} from 'typeorm'

@Entity('jokes')
@ObjectType()
export class JokeEntity extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn('text')
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
