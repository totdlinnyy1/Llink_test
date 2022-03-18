import {Module} from '@nestjs/common'
import {JokesService} from './jokes.service'
import {HttpModule} from '@nestjs/axios'
import {JokesResolver} from './jokes.resolver'
import {TypeOrmModule} from '@nestjs/typeorm'
import {JokeEntity} from '../entities/joke.entity'

@Module({
  imports: [TypeOrmModule.forFeature([JokeEntity]), HttpModule],
  providers: [JokesService, JokesResolver],
  exports: [TypeOrmModule]
})
export class JokesModule {}
