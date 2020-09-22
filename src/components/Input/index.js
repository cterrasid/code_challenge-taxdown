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
      {errors?.name?.type === "required" && <span>This field is required</span>}
      {errors?.name?.type === "maxLength" && (
        <span>This field must be less than 40 characters</span>
      )}
    </StyledInput>
  );
}
