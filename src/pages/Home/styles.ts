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

export const SearchContainer = styled.View`
  margin-top: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.TextInput`
  border-radius: 8px;
  padding: 10px;
  height: 40px;
`;

export const BtnSearch = styled.Button`
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 70px;
    left: 40px;
`;
