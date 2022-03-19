import {Test, TestingModule} from '@nestjs/testing'
import {JokesResolver} from './jokes.resolver'
import {JokesService} from './jokes.service'

describe('JokeResolver', () => {
  let resolver: JokesResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JokesService,
        JokesResolver,
        {
          provide: JokesService,
          useFactory: () => ({
            getCategories: jest.fn(() => [
              {
                data: {
                  getCategories: [
                    'animal',
                    'career',
                    'celebrity',
                    'dev',
                    'explicit',
                    'fashion',
                    'food',
                    'history',
                    'money',
                    'movie',
                    'music',
                    'political',
                    'religion',
                    'science',
                    'sport',
                    'travel'
                  ]
                }
              }
            ])
          })
        }
      ]
    }).compile()
    resolver = module.get<JokesResolver>(JokesResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })

  describe('getCategories', () => {
    it('should return an array of categories', async () => {
      expect(await resolver.getCategories()).toEqual([
        {
          data: {
            getCategories: [
              'animal',
              'career',
              'celebrity',
              'dev',
              'explicit',
              'fashion',
              'food',
              'history',
              'money',
              'movie',
              'music',
              'political',
              'religion',
              'science',
              'sport',
              'travel'
            ]
          }
        }
      ])
    })
  })
})
