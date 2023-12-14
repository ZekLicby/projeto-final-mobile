import React, { FC, useState } from "react";
import {
  Container,
  Subtitle,
  Title,
  ContainerInput,
  StyledTextInput,
  Info,
} from "./styles";
import { TextInputProps, ScrollView } from "react-native";
import Button from "@components/Button";
import theme from "src/theme";
import Toast from "@components/Toast";
import axios from "axios";

interface InputProps extends TextInputProps {}

const Input: FC<InputProps> = ({ style, ...otherProps }) => {
  const [text, setText] = useState<string>("");

  return (
    <ContainerInput>
      <StyledTextInput
        onChangeText={(value) => setText(value)}
        value={text}
        style={style}
        {...otherProps}
      />
    </ContainerInput>
  );
};

export default function AddColaborator() {
  // https://unicap-setor-de-protocolos.up.railway.app/funcionario

  const [showToast, setShowToast] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [sector, setSector] = useState("");
  const [email, setEmail] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [registration, setRegistration] = useState("");
  const [password, setPassword] = useState("");

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const handleSubmit = () => {
    const body = {
      nome: "Carlos",
      cargo: "Funcionario protocolo",
      setor: "protocolo",
      email: "carloslin@gmail.com",
      dataNascimento: "2002-12-22T12:00:00",
      matricula: "87123",
      senhaHash: "lnkhdas8712",
    };

    axios
      .post(
        "https://unicap-setor-de-protocolos.up.railway.app/funcionario",
        body
      )
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <ScrollView>
      <Container>
        <Subtitle>Nome</Subtitle>
        <Input onChangeText={(value) => setName(value)} />
        <Subtitle>N° de matrícula</Subtitle>
        <Input onChangeText={(value) => setRegistration(value)} />
        <Subtitle>E-mail</Subtitle>
        <Input onChangeText={(value) => setEmail(value)} />
        <Subtitle>Cargo</Subtitle>
        <Input onChangeText={(value) => setRole(value)} />
        <Subtitle>Data de Nascimento</Subtitle>
        <Input
          autoComplete="birthdate-day"
          keyboardType="number-pad"
          onChangeText={(value) => setBirthdate(value)}
        />
        <Subtitle>Setor</Subtitle>
        <Input onChangeText={(value) => setSector(value)} />
        <Info>
          <Button
            width={144}
            text="Cadastrar"
            color={theme.color.default}
            onPress={() => handleSubmit()}
          />
          <Button
            width={144}
            text="Cancelar"
            color={theme.color.second}
            onPress={() => {
              handleSubmit();
            }}
          />
        </Info>
        {showToast && <Toast message="Cadastro realizado com sucesso!" />}
      </Container>
    </ScrollView>
  );
}
