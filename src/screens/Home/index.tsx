import React from "react";
import { Container, Files, Title, ImagePrincipal } from "./styles";
import Button from "@components/Button";
import logoresponsivo from "../../images/logo-responsivo.png";

export default function Home({ navigation }: any) {
  const goProfile = () => {
    navigation.navigate("Meu Perfil");
  };
  const goConsulta = () => {
    navigation.navigate("Consulta");
  };
  const goToColaborator = () => {
    navigation.navigate("Cadastro Colaborador");
  };
  return (
    <Container>
      <ImagePrincipal source={logoresponsivo} />
      <Title>Seja bem vindo ao sistema de protocolos da Unicap!!</Title>
      <Files>
        <Button
          iconName="user"
          text="Administrador"
          color="#8B642A"
          onPress={goProfile}
        />
        <Button
          iconName="user-plus"
          text="Cadastro"
          color="#8B642A"
          onPress={goToColaborator}
        />
        <Button
          iconName="edit-2"
          text="Consulta"
          color="#8B642A"
          onPress={goConsulta}
        />
      </Files>
    </Container>
  );
}
