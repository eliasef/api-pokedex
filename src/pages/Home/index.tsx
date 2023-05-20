import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import pokeball from '../../assets/img/pokeball.png';
import { Card, Pokemon, PokemonType } from '../../components/Card'
import * as S from './styles'
import api from "../../service/api";

type Request = {
    id: number,
    types: PokemonType[]
};

export function Home() {

    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    const { navigate } = useNavigation()
    function handleNavigation(pokemonId: number) {
        navigate('About', {
            pokemonId,
        })
    }

    useEffect(() => {
        async function getAllPokemon() {
            const response = await api.get('/pokemon');
            const { results } = response.data;

            const payloadPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const { id, types } = await getMoreInfo(pokemon.url)
                    // aqui já resgato id e types

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
            // get é uma requisição, é como se fosse pesquisando na url
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
            <FlatList
                ListHeaderComponent={
                    <>
                        <S.Header source={pokeball} />
                        <S.Title>Pokédex</S.Title>
                    </>
                }
                contentContainerStyle={{
                    paddingHorizontal: 20
                }}
                data={pokemons}
                keyExtractor={pokemon => pokemon.id.toString()}
                renderItem={({item: pokemon}) => (
                    <Card data={pokemon} onPress={() => {
                        handleNavigation(pokemon.id)
                    }} />
                )}
            />
        </S.Container>
    );
};