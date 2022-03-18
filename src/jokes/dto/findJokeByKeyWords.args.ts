import {ArgsType, Field, Int} from '@nestjs/graphql'

@ArgsType()
export class FindJokeByKeyWordsArgs {
  @Field(() => String)
  keyWords!: string

  @Field(() => Int, {nullable: true})
  count?: number

  @Field(() => Boolean)
  addToFavourite!: boolean
}
