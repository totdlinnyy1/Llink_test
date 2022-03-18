import {Args, Query, Resolver} from '@nestjs/graphql'
import {JokeEntity} from '../entities/joke.entity'
import {JokesService} from './jokes.service'
import {Observable} from 'rxjs'
import {AxiosResponse} from 'axios'
import {JokesOutput} from './dto/jokes.output'
import {FindJokeByKeyWordsArgs} from './dto/findJokeByKeyWords.args'
import {FindJokeByCategoryArgs} from './dto/findJokeByCategory.args'

@Resolver(() => JokeEntity)
export class JokesResolver {
  constructor(private readonly jokeService: JokesService) {}

  @Query(() => [String])
  async getCategories(): Promise<Observable<AxiosResponse<string[]>>> {
    return this.jokeService.getCategories()
  }

  @Query(() => JokeEntity)
  async findRandomJoke(
    @Args('addToFavourite', {type: () => Boolean}) addToFavourite: boolean
  ): Promise<Observable<Promise<AxiosResponse<JokeEntity>>>> {
    return this.jokeService.getRandomJoke(addToFavourite)
  }

  @Query(() => JokeEntity)
  async findRandomJokeByCategory(
    @Args() args: FindJokeByCategoryArgs
  ): Promise<Observable<Promise<AxiosResponse<JokeEntity>>>> {
    return this.jokeService.getRandomJokeByCategory(
      args.category,
      args.addToFavourite
    )
  }

  @Query(() => JokesOutput)
  async findJokeByKeyWords(
    @Args() args: FindJokeByKeyWordsArgs
  ): Promise<Observable<Promise<AxiosResponse<JokesOutput>>> | JokesOutput> {
    return this.jokeService.getJokeByKeyWords(
      args.keyWords,
      args.count,
      args.addToFavourite
    )
  }

  @Query(() => [JokeEntity])
  async showFavourite(): Promise<JokeEntity[]> {
    return this.jokeService.showFavourite()
  }
}
