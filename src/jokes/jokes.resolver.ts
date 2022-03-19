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

  // Запрос на получение всех категорий из api
  @Query(() => [String])
  async getCategories(): Promise<Observable<AxiosResponse<string[]>>> {
    return this.jokeService.getCategories()
  }

  // Запрос на получение рандомной шутки из api
  @Query(() => JokeEntity)
  async findRandomJoke(
    @Args('addToFavourite', {type: () => Boolean}) addToFavourite: boolean
  ): Promise<Observable<Promise<AxiosResponse<JokeEntity>>>> {
    return this.jokeService.getRandomJoke(addToFavourite)
  }

  // Запрос на получение рандомной шутки из api по нужной категории
  @Query(() => JokeEntity)
  async findRandomJokeByCategory(
    @Args() args: FindJokeByCategoryArgs
  ): Promise<Observable<Promise<AxiosResponse<JokeEntity>>>> {
    return this.jokeService.getRandomJokeByCategory(
      args.category,
      args.addToFavourite
    )
  }

  // Запрос на получение списка шуток из api по ключевым словам
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

  // Запрос на получение шуток добавленных в избранное
  @Query(() => [JokeEntity])
  async showFavourite(): Promise<JokeEntity[]> {
    return this.jokeService.showFavourite()
  }
}
