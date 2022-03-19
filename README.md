# Llink test
![node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![node](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![node](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![node](http://ForTheBadge.com/images/badges/built-with-swag.svg)
____
![api.chucknorris.io](https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png)
____
About the project
-----------
:rocket: This is a server using the NestJs framework along with GraphQl. Server parses jokes from [api.chucknorris.io](https://api.chucknorris.io).
And allows you to save jokes to a database.

Queries
-----------
To get categories of jokes enter:
```
getCategories
```
To get a random joke enter:
```
findRandomJoke(addToFavourite: Boolean!)
```
To get a random joke from a category, enter:
```
findRandomJokeByCategory(category: String!, addToFavourite: Boolean!)
```
```
findRandomJokeByCategory(category: String!, addToFavourite: Boolean!)
```
To get a certain number of jokes by keywords, enter:
```
findJokeByKeyWords(
keyWords: String!,
count: Int,
addToFavourite: Boolean!)
```
To get a list of your favorite jokes type:
```
showFavourite
```

Installation
-----------
To use Lllink test you need to install the dependencies first:  
```
npm run install
or
yarn
```
Next, you need to create an `.env` file and write the url of the postgres database there:
```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/database
```
Then you can start the project:
```
npm run start
or
yarn start
```
And go to `http://localhost:3000/graphql`.  

To run the tests, enter
```
npm run jest
or
yarn jest
```

Docker Pull Command
-----------
```
docker pull totdlinnyy/llink-test
```

