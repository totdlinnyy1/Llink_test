import {Field, ObjectType} from '@nestjs/graphql'

@ObjectType()
export class JokeEntity {
  @Field(() => String)
  id!: string

  @Field(() => String)
  url!: string

  @Field(() => String)
  icon_url!: string

  @Field(() => String)
  value!: string
}
