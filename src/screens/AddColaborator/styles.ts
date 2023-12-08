import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  padding-left: 35px;
  padding-top: 10px;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: black;
  margin-bottom: 15%;
`;

export const Subtitle = styled.Text`
  font-size: 25px;
  font-weight: 500;
  color: black;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: white;
`;

export const Info = styled.View`
  flex-direction: row;
  gap: 5px;
`;

export const ContainerInput = styled.View`
  width: 90%;
  margin-bottom: 10px;
`;

export const StyledTextInput = styled.TextInput`
  height: 40px;
  border-color: black;
  border-width: 1px;
  padding: 10px;
`;
