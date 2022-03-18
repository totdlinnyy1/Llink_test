import {Field, Int, ObjectType} from '@nestjs/graphql'
import {JokeEntity} from '../../entities/joke.entity'

@ObjectType()
export class JokesOutput {
  @Field(() => Int)
  total?: number

  @Field(() => [JokeEntity])
  result?: JokeEntity[]

  @Field(() => String, {nullable: true})
  error?: string
}
