import { join } from 'path'; // en node
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/env.config';
import { JOiValidationSchema } from './config/joi.validation';


    @Module({
      imports: [

        ConfigModule.forRoot({
          load: [ EnvConfiguration ],
          validationSchema: JOiValidationSchema,
        }),

        ServeStaticModule.forRoot({
        rootPath: join(__dirname,'..','public'),
        }),

        MongooseModule.forRoot( process.env.MONGODB ),

        PokemonModule,

        CommonModule,

        SeedModule,
      ],
    })

export class AppModule {}
