import React from "react";
import Input from "components/Input";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { StyledForm, StyledButton } from "./styles";
import useUserContext, { ACTION } from "context/UserContext";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const [dispatch] = useUserContext();

  const onSubmit = (data, e) => {
    dispatch({
      type: ACTION.CREATE,
      payload: {
        id: _.uniqueId(0),
        name: data.name,
        surname: data.surname,
        age: data.age,
      },
    });

    e.target.reset();
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
        errors={errors}
      />
      {errors?.name?.type === "required" && <span>This field is required</span>}
      {errors?.name?.type === "maxLength" && (
        <span>This field must be less than 40 characters</span>
      )}
      <Input
        label="Surname"
        name="surname"
        placeholder="Your last name"
        register={register({
          required: true,
          maxLength: 40,
        })}
        errors={errors}
      />
      {errors?.name?.type === "required" && <span>This field is required</span>}
      {errors?.name?.type === "maxLength" && (
        <span>This field must be less than 40 characters</span>
      )}
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
