import { forwardRef, InputHTMLAttributes } from "react";
import { BoxLabel } from "components/common/Box";
import { InputContainer, StyledInput } from "components/common/Input/styles";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ label, className, ...props }, ref) => {
  return (
    <InputContainer className={className}>
      {label && <BoxLabel>{label}</BoxLabel>}
      <StyledInput ref={ref} {...props} />
    </InputContainer>
  );
});

export default Input;
