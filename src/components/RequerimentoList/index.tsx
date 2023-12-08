import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styled from "styled-components/native";

interface RequerimentoListProps {
  data: { nome: string; dataHora: string }[];
}

const ItemContainer = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background-color: #ddd;
  margin: 5px;
`;

const RequerimentoList: React.FC<
  RequerimentoListProps & { selectedDepartment: string }
> = ({ data, selectedDepartment }) => {
  const filteredData = selectedDepartment
    ? data.filter((item) => item.setor === selectedDepartment)
    : data;

  return (
    <>
      {filteredData.map((item, index) => (
        <ItemContainer key={index}>
          <Text>{item.nome}</Text>
          <Text>{item.dataHora}</Text>
        </ItemContainer>
      ))}
    </>
  );
};

export default RequerimentoList;
