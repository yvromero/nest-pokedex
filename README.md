<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>



## Development Environment Setup

Clone the repository

```git clone```

## Install Dependencies

## Development
```
yarn install
```

## Start the Application in Development Mode
```
yarn start:dev
```

## Install Nest.js CLI: Command line interface
```
npm i -g @nestjs/cli
```


## Set Up the Database
```
docker-compose up -d
```


## Production mode
```
yarn start:prod
```

## Build BD with seed

```
http://localhost:3000/api/v2/seed
```

## Technology Stack
* MongoDB
* Nest.js
* Docker


## Production Build
1. Create the file ```.env.prod```
2. Set environment variables in env.prod
3. Build the production image ``` docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build ```