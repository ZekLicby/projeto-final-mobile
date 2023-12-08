import styled from "styled-components/native";
import { View, Text } from "react-native";

export const SuccessContainer = styled(View)`
  background-color: #4caf50;
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const SuccessMessage = styled(Text)`
  color: #fff;
`;
