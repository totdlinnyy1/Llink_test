import {join} from 'path'
import {Module} from '@nestjs/common'
import {AppController} from './app.controller'
import {AppService} from './app.service'
import {TypeOrmModule} from '@nestjs/typeorm'
import {JokesModule} from './jokes/jokes.module'
import {GraphQLModule} from '@nestjs/graphql'
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo'
import {JokeEntity} from './entities/joke.entity'
import {ConfigModule} from '@nestjs/config'

const isDevelopment = process.env.NODE_ENV === 'development'

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: true,
      entities: [JokeEntity]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: isDevelopment,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    JokesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
