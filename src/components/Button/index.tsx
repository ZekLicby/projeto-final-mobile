import { ButtonContainer, ButtonText } from './styles';
import React, { FC } from 'react';
import { Feather } from '@expo/vector-icons';

interface ButtonProps {
  onPress: () => void;
  text: string;
  color?: string;
  iconName?: string;
  width?: number; 
  height?: number; 
}

const Button: FC<ButtonProps> = ({ onPress, text, color,iconName = null, width = 250, height = 48 }) => {
  return (
    <ButtonContainer onPress={onPress} style={{ backgroundColor: color, width, height }}>
      <ButtonText>{text}</ButtonText>
      <Feather name={iconName} size={24} color="#fff" />
    </ButtonContainer>
  );
};

export default Button;
