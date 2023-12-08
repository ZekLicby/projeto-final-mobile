import React, { FC, useState } from "react";
import {
  Container,
  Files,
  ButtonContainer,
  Circle,
  ButtonText,
} from "./styles";
import Button from "@components/Button";
import theme from "src/theme";

interface ToggleButtonProps {
  title: string;
  onPressNavigate?: () => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({ title, onPressNavigate }) => {
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const handleToggle = () => {
    setIsFilled(!isFilled);
  };

  const handlePress = () => {
    handleToggle();

    if (onPressNavigate) {
      onPressNavigate();
    }
  };

  return (
    <ButtonContainer onPress={handlePress}>
      <Circle isFilled={isFilled} />
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default function RegisterFiles({ navigation }: any) {
  const goToFilesOne = () => {
    navigation.navigate("Fichas");
  };

  const goToFilesTwo = () => {
    navigation.navigate("Fichas 2");
  };

  return (
    <Container>
      <Files>
        <ToggleButton
          onPressNavigate={goToFilesOne}
          title="Ficha de registro 01"
        />
        <ToggleButton
          onPressNavigate={goToFilesTwo}
          title="Ficha de registro 02"
        />
      </Files>

      <Button
        text="Enviar"
        color={theme.color.default}
        onPress={() => console.log("heyjude")}
      />
    </Container>
  );
}
