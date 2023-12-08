import styled from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
`;

export const Box = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  border-width: 1px;
  border-color: black;
  border-radius: 5px;
  padding: 20px;
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
  flex-direction: row;
  margin-bottom: 10%;
  gap: 5px;
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

export const ContainerInput = styled.View`
  width: 250px;
  margin-bottom: 10px;
`;

export const StyledTextInput = styled.TextInput`
  height: 40px;
  border-color: black;
  border-width: 1px;
  padding: 10px;
`;
