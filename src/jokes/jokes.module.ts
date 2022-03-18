import {Module} from '@nestjs/common'
import {JokesService} from './jokes.service'
import {HttpModule} from '@nestjs/axios'
import {JokesResolver} from './jokes.resolver'

@Module({
  imports: [HttpModule],
  providers: [JokesService, JokesResolver]
})
export class JokesModule {}
