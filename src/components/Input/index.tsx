import { TextInputProps } from "react-native";
import { Feather } from "@expo/vector-icons";
import { IconContainer, InputContainer, InputField } from "./styles";
import React, { FC } from "react";

interface InputProps extends TextInputProps {
  iconName: string;
}

const Input: FC<InputProps> = ({ iconName, ...rest }) => {
  return (
    <InputContainer>
      <IconContainer>
        <Feather name={iconName} size={20} color="#555" />
      </IconContainer>
      <InputField {...rest} />
    </InputContainer>
  );
};

export default Input;
