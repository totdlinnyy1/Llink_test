export const getRandomJokeUrl = 'https://api.chucknorris.io/jokes/random'
export const getCategoriesUrl = 'https://api.chucknorris.io/jokes/categories'
export const getRandomJokeByCategoryUrl = (category: string): string =>
  `https://api.chucknorris.io/jokes/random?category=${category}`
export const getJokeByKeyWordsUrl = (keyWords: string): string =>
  `https://api.chucknorris.io/jokes/search?query=${keyWords}`
