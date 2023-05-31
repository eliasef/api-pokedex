import React, { useEffect, useState } from "react";
import { FlatList, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import pokeball from "../../assets/img/pokeball.png";
import { Card, Pokemon, PokemonType } from "../../components/Card";
import * as S from "./styles";
import api from "../../service/api";

type Request = {
    id: number;
    types: PokemonType[];
};

export function Home() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [offset, setOffset] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchedPokemon, setSearchedPokemon] = useState<Pokemon | null>(null);
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(true); // Variável de estado para controlar a exibição do botão

    const { navigate } = useNavigation();

    function handleNavigation(pokemonId: number) {
        navigate("About", {
            pokemonId,
        });
    }

    async function getAllPokemon(offset: number) {
        const response = await api.get(`/pokemon?offset=${offset}&limit=20`);
        const { results } = response.data;

        const payloadPokemons = await Promise.all(
            results.map(async (pokemon: Pokemon) => {
                const { id, types } = await getMoreInfo(pokemon.url);

                return {
                    name: pokemon.name,
                    id,
                    types,
                };
            })
        );

        setPokemons(payloadPokemons);
    }

    async function getMoreInfo(url: string): Promise<Request> {
        const response = await api.get(url);
        const { id, types } = response.data;

        return {
            id,
            types,
        };
    }

    async function searchPokemon() {
        if (!searchTerm) return;

        try {
            const response = await api.get(`/pokemon/${searchTerm.toLowerCase()}`);
            const { id, types } = response.data;

            setSearchedPokemon({
                name: searchTerm.toLowerCase(),
                id,
                types,
            });

            // Ocultar o botão "Carregar mais"
            setShowLoadMoreButton(false);
        } catch (error) {
            setSearchedPokemon(null);
            console.log("Pokémon não encontrado");
        }
    }

    useEffect(() => {
        getAllPokemon(offset);
    }, [offset]);

    function handleLoadMore() {
        setOffset(offset + 20);
    }

    return (
        <S.Container>
            {searchedPokemon ? (
                <Card
                    data={searchedPokemon}
                    onPress={() => handleNavigation(searchedPokemon.id)}
                />
            ) : (
                <FlatList
                    ListHeaderComponent={
                        <>
                            <S.Header source={pokeball} />
                            <S.Title>Pokédex</S.Title>
                            <S.SearchContainer>
                                <S.SearchInput
                                    style={S.SearchInput}
                                    placeholder="Digite o nome do Pokémon"
                                    value={searchTerm}
                                    onChangeText={setSearchTerm}
                                />
                                <S.BtnSearch title="Buscar" onPress={searchPokemon} />
                            </S.SearchContainer>
                        </>
                    }
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                    }}
                    data={pokemons}
                    keyExtractor={(pokemon) => pokemon.id.toString()}
                    renderItem={({ item: pokemon }) => (
                        <Card
                          key={pokemon.id.toString()} // Adicione esta linha
                          data={pokemon}
                          onPress={() => handleNavigation(pokemon.id)}
                        />
                      )}
                      
                />
            )}

            {showLoadMoreButton && ( // Exibir o botão "Carregar mais" apenas quando showLoadMoreButton for true
                <Button title="Carregar mais" onPress={handleLoadMore} />
            )}
        </S.Container>
    );
}

