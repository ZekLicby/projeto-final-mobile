import {
  Box,
  Container,
  ImagePrincipal,
  Subtitle,
  Title,
  Info,
  LoginArea,
} from "./styles";
import React, { useState } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import Button from "../../components/Button";
import Input from "../../components/Input";
import unicaplogo from "../../images/unicap-logo1.png";
import Toast from "@components/Toast";
import theme from "src/theme";

export default function PasswordScreen({ navigation }: any) {
  const [showToast, setShowToast] = useState(false);

  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

  const goHome = () => {
    navigation.push("Login");
  };

  const goContinue = () => {
    navigation.navigate("ForgetPassword");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <Container>
        <Box>
          <ImagePrincipal source={unicaplogo} />
          <Info>
            <Title>Recuperação de senha</Title>
            <Subtitle>
              Para redefinir sua senha, informe seu email cadastrado e lhe
              enviaremos um link com as devidas instruções.
            </Subtitle>
          </Info>
          <LoginArea>
            <Input
              iconName="mail"
              placeholder="Digite seu e-mail"
              secureTextEntry
            />
            <Button
              text="Entrar"
              color={theme.color.default}
              onPress={() => {
                handleShowToast();
                goContinue();
              }}
            />
            {showToast && (
              <Toast message="Email de recuperação enviado com sucesso!" />
            )}
            <Subtitle onPress={goHome}>Cancelar</Subtitle>
          </LoginArea>
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
