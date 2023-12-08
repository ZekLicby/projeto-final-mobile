import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: flex-start;
  padding-left: 35px;
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

export const Description = styled.Text`
  font-size: 25px;
  font-weight: regular;
  color: black;
`;

export const Info = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #209eba;
  align-self: center;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 292px;
  margin-top: 20px;
`;
