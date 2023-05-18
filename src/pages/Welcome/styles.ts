import styled, { css } from "styled-components/native"

export const Container = styled.View`
    ${({ theme }: { theme: any }) => css`
    flex: 1;
    background: ${theme.backgroundCard.water};
  `}
`;

export const Content = styled.View`
    height: 70%;
    justify-content: center;
    align-items: center;
`;

export const WrapperAnimation = styled.View`
    ${({ theme }: { theme: any }) => css`
        width: 200px;
        height: 300px;
        background-color: ${theme.boxType.water};
        border-radius: 100px;
        justify-content: center;
        align-items: center;
        transform: rotate(30deg);
    `}
`;

export const WrapperImage = styled.View`
    transform: rotate(-30deg);
`;

export const Footer = styled.View`
    ${({ theme }: { theme: any }) => css`
        justify-content: center;
        align-items: center;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height: 30%;
        background-color: ${theme.colors.background};
        padding: 20px;
    `}
`;

export const Title = styled.Text`
    ${({ theme }: { theme: any }) => css`
        font-size: 40px;
        color: ${theme.colors.background};
        margin-top: 20px;
        font-family: ${theme.fonts.bold};
    `}
`;

export const SubTitle = styled.Text`
    ${({ theme }: { theme: any }) => css`
        font-size: 16px;
        margin-top: 20px;
        color: ${theme.colors.background};
        font-family: ${theme.fonts.text};
    `}
`;


// pq não consigo o autocomplete no theme. ?