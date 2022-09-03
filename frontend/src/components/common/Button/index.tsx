import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "components/common/Button/styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...props }: Props) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
