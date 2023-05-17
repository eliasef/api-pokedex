import React from "react";
import AnimatedLottieView from "lottie-react-native";

import welcomeSquirtle from './squirtle.json';

import * as S from './styles'

export function Welcome() {
    return (
        <S.Container>
            <S.Content>
                <S.WrapperAnimation>
                    <AnimatedLottieView style={{ width: 200 }} autoPlay source={welcomeSquirtle} loop />
                </S.WrapperAnimation>
            </S.Content>

            <S.Footer>
                <S.Title>Bem vindo</S.Title>
                <S.SubTitle>Encontre todos os pokémons em um só lugar</S.SubTitle>
            </S.Footer>
        </S.Container>
    )
};