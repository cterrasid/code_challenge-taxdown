import React from "react";
import Input from "components/Input";
import { useForm } from "react-hook-form";
import { StyledForm, StyledButton } from "./styles";

export default function Form() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Name"
        name="name"
        placeholder="Your first name"
        register={register({
          required: true,
          maxLength: 40,
        })}
      />
      <Input
        label="Surname"
        name="surname"
        placeholder="Your last name"
        register={register({
          required: true,
          maxLength: 40,
        })}
      />
      <Input
        label="Age"
        name="age"
        type="number"
        placeholder="Your age"
        register={register({ min: 1 })}
      />
      <StyledButton>Save</StyledButton>
    </StyledForm>
  );
}
