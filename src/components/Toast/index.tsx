import React from "react";
import { SuccessContainer, SuccessMessage } from "./styles";

interface ToastProps {
  message: string;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <SuccessContainer>
      <SuccessMessage>{message}</SuccessMessage>
    </SuccessContainer>
  );
};

export default Toast;
