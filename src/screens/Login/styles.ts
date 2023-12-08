import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.color.default};
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.View`
  background-color: ${theme.color.principal};
  height: 65%;
  width: 75%;
  padding: 20px;
  border-radius: 10px;
`;

export const ImagePrincipal = styled.Image`
  margin-top: 10px;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 26px;
  color: black;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${theme.color.gray_two};
`;

export const Info = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LoginArea = styled.View`
  justify-content: center;
  align-items: center;
  gap: 15px;
`;
