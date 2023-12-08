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
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  return (
    <ScrollView>
      <Container>
        <Subtitle>Nome</Subtitle>
        <Input />
        <Subtitle>N° de matrícula</Subtitle>
        <Input />
        <Subtitle>E-mail</Subtitle>
        <Input />
        <Subtitle>Cargo</Subtitle>
        <Input />
        <Subtitle>Data de Nascimento</Subtitle>
        <Input autoComplete="birthdate-day" keyboardType="number-pad" />
        <Subtitle>Setor</Subtitle>
        <Input />
        <Info>
          <Button
            width={144}
            text="Cadastrar"
            color={theme.color.default}
            onPress={handleShowToast}
          />
          <Button
            width={144}
            text="Cancelar"
            color={theme.color.second}
            onPress={() => {
              console.log("Fala, Zézé!");
            }}
          />
        </Info>
        {showToast && <Toast message="Cadastro realizado com sucesso!" />}
      </Container>
    </ScrollView>
  );
}
