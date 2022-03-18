import {ArgsType, Field} from '@nestjs/graphql'

@ArgsType()
export class FindJokeByCategoryArgs {
  @Field(() => String)
  category!: string

  @Field(() => Boolean)
  addToFavourite!: boolean
}
