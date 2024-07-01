import { Injectable } from '@nestjs/common';
import { PokeReponse } from './interfaces/poke-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {

  constructor(

    @InjectModel( Pokemon.name )
    private readonly pokemonModel: Model<Pokemon>,

    private readonly http: AxiosAdapter,

  ) {}


  async executeSeed() {

    await this.pokemonModel.deleteMany({}); // delete * from pokemons;

  // Opcion 1, insertar de a uno
    // const { data } = await this.axios.get<PokeReponse>('https://pokeapi.co/api/v2/pokemon?limit=10');
    
    // data.results.forEach(async({ name, url }) => {

    //   const segments = url.split('/');
    //   const no = +segments[ segments.length - 2 ];

    //   const pokemon = await this.pokemonModel.create({ name, no });

    // })

  // Opcion 2, insertar varios con promesas

  //     const { data } = await this.axios.get<PokeReponse>('https://pokeapi.co/api/v2/pokemon?limit=10');
      
  //     const insertPromisesArray = [];

  //     data.results.forEach(({ name, url }) => {
  
  //       const segments = url.split('/');
  //       const no = +segments[ segments.length - 2 ];

  //       insertPromisesArray.push(
            
  //       this.pokemonModel.create({ name, no })

  //       );
  
  //     });

  //     await Promise.all( insertPromisesArray );

  // Opcion 3, insertar varias entradas con una sola insercion

    const data = await this.http.get<PokeReponse>('https://pokeapi.co/api/v2/pokemon?limit=100');
      
    const pokemonToInsert: { name: string, no: number }[] = [];

    data.results.forEach(({ name, url }) => {

      const segments = url.split('/');
      const no = +segments[ segments.length - 2 ];

      pokemonToInsert.push({ name, no });

    });

      await this.pokemonModel.insertMany( pokemonToInsert );
    
    return 'Seed executed successfully'; 
  }
}
