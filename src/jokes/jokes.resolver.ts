import {Query, Resolver} from '@nestjs/graphql'
import {JokeEntity} from './dto/joke.entity'
import {JokesService} from './jokes.service'
import {Observable} from 'rxjs'
import {AxiosResponse} from 'axios'

@Resolver(() => JokeEntity)
export class JokesResolver {
  constructor(private readonly jokeService: JokesService) {}

  @Query(() => JokeEntity)
  async getRandomJoke(): Promise<Observable<AxiosResponse<JokeEntity>>> {
    return this.jokeService.getRandomJoke()
  }
}
