import React from "react";
import { Container, Description, Subtitle } from "./styles";
import Button from "@components/Button";

export default function Profile({ navigation }: any) {
  const dadosPerfil = [
    { subtitle: "Nome", description: "Charly Silva" },
    { subtitle: "N° de matrícula", description: "00000000" },
    { subtitle: "E-mail", description: "email@unicap.br" },
    { subtitle: "Cargo", description: "Gerente" },
    { subtitle: "Data de Nascimento", description: "01/01/2000" },
    { subtitle: "Setor", description: "Protocolo" },
  ];

  const goToColaborator = () => {
    navigation.navigate("Cadastro Colaborador");
  };

  return (
    <Container>
      {dadosPerfil.map(({ subtitle, description }, index) => (
        <React.Fragment key={index}>
          <Subtitle>{subtitle}</Subtitle>
          <Description>{description}</Description>
        </React.Fragment>
      ))}
      <Button
        text="Adicionar colaborador"
        color="#209EBA"
        onPress={goToColaborator}
      />
    </Container>
  );
}
