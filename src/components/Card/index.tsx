import React from "react";
import dotsImage from '../../assets/img/dots.png';
import pokeballCard from '../../assets/img/pokeballCard.png';
import * as S from './styles'
import { TouchableOpacityProps } from "react-native";
import { FadeAnimation } from "../FadeAnimation";

export type PokemonType = {
    type: {
        name: string;
    }
};

export type Pokemon = {
    name: string;
    url: string;
    id: number;
    types: PokemonType[]
};

type Props = {
    data: Pokemon;
} & TouchableOpacityProps;

export function Card({ data, ...rest }: Props) {
    return (
        <S.PokemonCard type={data.types[0].type.name} {...rest}>
            <S.LeftSide>
                <S.PokemonId>#{data.id}</S.PokemonId>
                <S.PokemonName>{data.name}</S.PokemonName>
                <S.ImageCardDetailLeftSide source={dotsImage} />

                <S.PokemonContentType>
                    {data.types.map(PokemonType =>
                        <S.PokemonType type={PokemonType.type.name}>
                            <S.PokemonTypeText key={PokemonType.type.name}>
                                {PokemonType.type.name}
                            </S.PokemonTypeText>
                        </S.PokemonType>)}
                </S.PokemonContentType>
            </S.LeftSide>


            <S.RightSide>
                <S.PokeballDetail source={pokeballCard} />
                <FadeAnimation>
                    <S.PokemonImage
                        source={{
                            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`
                        }}
                    />
                </FadeAnimation>
            </S.RightSide>
        </S.PokemonCard >
    )
}