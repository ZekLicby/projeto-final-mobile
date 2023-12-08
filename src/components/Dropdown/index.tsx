// Importações necessárias
import React, { useState } from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { Picker } from "@react-native-picker/picker";

// Estilos usando Styled Components
const Container = styled(View)`
  align-items: flex-end;
  padding: 20px;
`;

const Dropdown = styled(Picker)`
  width: 200px;
  height: 40px;
  background-color: #f0f0f0;
`;

// Componente principal
const DropdownComponent = ({
  selectedDepartment,
  onDepartmentChange,
}: {
  selectedDepartment: string;
  onDepartmentChange: (value: string) => void;
}) => {
  const departments = ["Protocolos", "Admissão", "Diretoria"];

  return (
    <Container>
      <Dropdown
        selectedValue={selectedDepartment}
        onValueChange={(itemValue) => onDepartmentChange(itemValue)}
      >
        <Picker.Item
          label="Todos os departamentos"
          value="Todos os departamentos"
        />
        {departments.map((department, index) => (
          <Picker.Item key={index} label={department} value={department} />
        ))}
      </Dropdown>
    </Container>
  );
};

export default DropdownComponent;
