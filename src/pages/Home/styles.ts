import styled, { css } from "styled-components/native"
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width

export const Container = styled.View`
    ${({ theme }) => css`
        flex: 1;
        background: ${theme.colors.background};
  `}
`;

export const Header = styled.ImageBackground`
    ${({ theme }) => css`
        width: ${windowWidth}px;
        height: 220px;
        background-color: ${theme.colors.background};
        margin-left: -20px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
      font-family: ${theme.fonts.light};
      font-size: 35px;
      line-height: 45px;
      color: ${theme.colors.light_text};
      text-align: center;
  `}
`;