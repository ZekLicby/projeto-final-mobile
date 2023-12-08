import React, { FC, useState } from "react";
import {
  AddButton,
  Box,
  Container,
  Description,
  Subtitle,
  Title,
  ContainerInput,
  StyledTextInput,
  Info,
} from "./styles";
import { TextInputProps, ScrollView } from "react-native";
import Button from "@components/Button";
import theme from "src/theme";

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

export default function FilesTwo() {
  return (
    <ScrollView>
      <Container>
        <Box>
          <Subtitle>Tipo de Doc.</Subtitle>
          <Input />
          <Subtitle>Registro por</Subtitle>
          <Input />
          <Subtitle>Curso</Subtitle>
          <Input />
          <Subtitle>Nº de matrícula</Subtitle>
          <Input />
          <Subtitle>Observações</Subtitle>
          <Input />
          <Subtitle>Nº de CI</Subtitle>
          <Input />
          <Subtitle>Assunto</Subtitle>
          <Input
            multiline
            style={{
              height: 140,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          />
        </Box>
        <Box>
          <Title>Tramitação </Title>
          <Subtitle>Órgão</Subtitle>
          <Input />
          <Subtitle>Encaminhado</Subtitle>
          <Input />
          <Subtitle>Anotações</Subtitle>
          <Input
            multiline
            style={{
              height: 140,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          />
        </Box>
        <Info>
          <Button
            width={144}
            text="Enviar"
            color={theme.color.default}
            onPress={() => {
              console.log("Fala, Zézé!");
            }}
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
      </Container>
    </ScrollView>
  );
}
