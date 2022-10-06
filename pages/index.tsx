import Image from 'next/image'
import Card from '../components/Card'
import { Container1, Container2 } from '../styles/index'

export type DataPokemon = {
  id: number;
  pokemons: [{id: number; name: string}]
}

export async function getStaticProps(){

  const maxPokemons = 251;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  const res = await fetch(`${api}/?limit=${maxPokemons}`);
  const req = await res.json();
  const data:DataPokemon[] = req.results;


  // add pokemon index
  data.forEach((item, index) => {
    item.id = index + 1
  })

  return{
    props: {
      pokemons: data
    }
  }

}

export default function Home({ pokemons }:DataPokemon) {
  return (
    <>
      <Container1>
        <h1>Poke<span>Next</span></h1>
        <Image src='/images/pokeball.png' width='50' height='50' alt='PokeNext'/>
      </Container1>
      <Container2>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </Container2>
    </>
  )
}
