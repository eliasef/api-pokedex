import styled, { css } from "styled-components/native"

export const Container = styled.View`
    ${({ theme }: { theme: any }) => css`
        flex: 1;
        background: ${theme.colors.background};
        padding: 20px;
  `}
`;