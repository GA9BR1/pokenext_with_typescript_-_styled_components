import Image from 'next/image'
import Link from 'next/link'
import { Container } from '../styles/card';

type CardTipo = {
    pokemon: {id: number; name: string}
}

export default function Card({pokemon}:CardTipo){
    return (
        <Container>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
            width='120'
            height='120'
            alt={pokemon.name}
            />
            <p>#{pokemon.id}</p>
            <h3>{pokemon.name}</h3>
            <Link href={`/pokemon/${pokemon.id}`}><a>Detalhes</a></Link>
        </Container>
    )
}