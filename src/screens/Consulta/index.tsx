// Consulta.tsx
import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import styled from "styled-components/native";
import Dropdown from "../../components/Dropdown";
import RequerimentoList from "../../components/RequerimentoList";

const Container = styled(SafeAreaView)`
  flex: 1;
`;

const TituloContainer = styled(View)`
  background-color: #ddd;
  padding: 10px;
`;

const Titulo = styled(Text)`
  font-size: 20px;
  font-weight: bold;
`;

const requerimentosFalsos = [
  { nome: "Requerimento 1", dataHora: "01/01/2023 10:00", setor: "Protocolos" },
  { nome: "Requerimento 2", dataHora: "02/01/2023 15:30", setor: "Admissão" },
  { nome: "Requerimento 3", dataHora: "03/01/2023 20:30", setor: "Diretoria" },
  // Adicione mais requerimentos com setores diferentes
];

const Consulta: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [filteredRequerimentos, setFilteredRequerimentos] =
    useState(requerimentosFalsos);

  const filterRequerimentos = (setor: string) => {
    if (setor === "Todos os departamentos") {
      setFilteredRequerimentos(requerimentosFalsos);
    } else {
      const filtered = requerimentosFalsos.filter((req) => req.setor === setor);
      setFilteredRequerimentos(filtered);
    }
  };

  const handleDepartmentChange = (value: string) => {
    setSelectedDepartment(value);
    filterRequerimentos(value);
  };

  return (
    <Container>
      <Dropdown
        selectedDepartment={selectedDepartment}
        onDepartmentChange={handleDepartmentChange}
      />
      <TituloContainer>
        <Titulo>Requerimentos</Titulo>
      </TituloContainer>
      <RequerimentoList data={filteredRequerimentos} />
    </Container>
  );
};

export default Consulta;
