import styled, { css } from "styled-components/native";

export const PokemonCard = styled.TouchableOpacity`
    ${({ theme, type }: { theme: any, type: any}) => css`
        border-radius: 10px;
        margin-top: 30px;
        flex-direction: row;
  `}
`;