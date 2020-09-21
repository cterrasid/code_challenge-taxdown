import React from "react";
import { StyledInput } from "./styles";

export default function Input({
  label,
  name,
  placeholder = "",
  register,
  type = "text",
  errors,
}) {
  console.log(errors);
  return (
    <StyledInput>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        name={name}
        ref={register}
      />
    </StyledInput>
  );
}
