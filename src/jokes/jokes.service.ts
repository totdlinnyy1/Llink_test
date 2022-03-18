import {Injectable} from '@nestjs/common'
import {HttpService} from '@nestjs/axios'
import {map, Observable} from 'rxjs'
import {AxiosError, AxiosResponse} from 'axios'
import {JokeEntity} from '../entities/joke.entity'
import {JokesOutput} from './dto/jokes.output'
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from 'typeorm'

@Injectable()
export class JokesService {
  constructor(
    @InjectRepository(JokeEntity)
    private readonly jokeRepository: Repository<JokeEntity>,
    private httpService: HttpService
  ) {}

  async getCategories(): Promise<Observable<AxiosResponse<string[]>>> {
    try {
      return this.httpService
        .get('https://api.chucknorris.io/jokes/categories')
        .pipe(map((response) => response.data))
    } catch (e) {
      console.error(e)
    }
  }

  async getRandomJoke(
    addToFavourite: boolean
  ): Promise<Observable<Promise<AxiosResponse<JokeEntity>>>> {
    try {
      return this.httpService
        .get('https://api.chucknorris.io/jokes/random')
        .pipe(
          map(async (response) => {
            const data = response.data
            if (addToFavourite) {
              await this.jokeRepository.save(data)
            }
            return data
          })
        )
    } catch (e) {
      const error = e as Error | AxiosError
      console.log(error.message)
    }
  }

  async getRandomJokeByCategory(
    category: string,
    addToFavourite: boolean
  ): Promise<Observable<Promise<AxiosResponse<JokeEntity>>>> {
    try {
      return this.httpService
        .get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .pipe(
          map(async (response) => {
            const data = response.data
            if (addToFavourite) {
              await this.jokeRepository.save(data)
            }
            return data
          })
        )
    } catch (e) {
      const error = e as Error | AxiosError
      console.log(error.message)
    }
  }

  async getJokeByKeyWords(
    keyWords: string,
    count: number,
    addToFavourite: boolean
  ): Promise<Observable<Promise<AxiosResponse<JokesOutput>>> | JokesOutput> {
    try {
      return this.httpService
        .get(`https://api.chucknorris.io/jokes/search?query=${keyWords}`)
        .pipe(
          map(async (response) => {
            const data = response.data
            if (count > 0) {
              const result = data.result.slice(0, count)
              if (addToFavourite) {
                await this.jokeRepository.save(result)
              }
              return {
                total: data.total,
                result
              }
            } else {
              if (addToFavourite) {
                await this.jokeRepository.save(data.result)
              }
            }
            return data
          })
        )
    } catch (e) {
      const error = e as Error | AxiosError
      console.log(error.message)
    }
  }
}
