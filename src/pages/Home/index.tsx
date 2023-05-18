import React, { useEffect, useState } from "react";
import { Text } from "react-native";

import * as S from './styles'
import api from "../../service/api";
import { Card } from "../../components/Card";

type PokemonType = {
    type: string,
};

type Pokemon = {
    name: string,
    url: string,
    id: number,
    types: PokemonType[]
};

type Request = {
    id: number,
    types: PokemonType[]
}

export function Home() {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        async function getAllPokemon() {
            const response = await api.get('/pokemon');
            const { results } = response.data;

            const payloadPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const { id, types } = await getMoreInfo(pokemon.url)

                    return {
                        name: pokemon.name,
                        id,
                        types
                    }
                })
            );

            setPokemons(payloadPokemons)
        };

        async function getMoreInfo(url: string): Promise<Request> {
            const response = await api.get(url);
            // entra na url do pokemon específico
            const { id, types } = response.data;

            return {
                id, types
            }
        }

        getAllPokemon();
    }, []);

    return (
        <S.Container>
            {pokemons.map(item =>
                <Card />
            )}
        </S.Container>
    )
};