import {Injectable} from '@nestjs/common'
import {HttpService} from '@nestjs/axios'
import {map, Observable} from 'rxjs'
import {AxiosResponse} from 'axios'
import {JokeEntity} from './dto/joke.entity'

@Injectable()
export class JokesService {
  constructor(private httpService: HttpService) {}

  async getRandomJoke(): Promise<Observable<AxiosResponse<JokeEntity>>> {
    try {
      return this.httpService
        .get('https://api.chucknorris.io/jokes/random')
        .pipe(map((response) => response.data))
    } catch (e) {
      console.error(e)
    }
  }
}
