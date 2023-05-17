import styled, { css } from "styled-components/native"

export const Container = styled.View`
    ${({ theme }: { theme: any }) => css`
    flex: 1;
    background: ${theme.colors.backgroundWater};
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
        background-color: ${theme.types.water};
        border-radius: 100px;
        justify-content: center;
        align-items: center;
    `}
`;

export const Footer = styled.View`
    ${({ theme }: { theme: any }) => css`
        justify-content: center;
        align-items: center;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
        height: 30%;
        background-color: ${theme.colors.background};
    `}
`;

export const Title = styled.Text`
    ${({ theme }: { theme: any }) => css`
        font-size: 20px;
        color: ${theme.colors.text_white};
    `}
`;

export const SubTitle = styled.Text`
    ${({ theme }: { theme: any }) => css`
        font-size: 14px;
        margin-top: 20px;
        color: ${theme.colors.text_white};
    `}
`;


// pq não consigo o autocomplete no theme. ?