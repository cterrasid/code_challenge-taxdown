import React from "react";
import Input from "components/Input";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { FormStyled, ButtonStyled } from "./styles";
import useUsers from "hooks/useUsers";
import { Link } from "react-router-dom";
import { MessageStyled } from "components/Table/styles";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const { createUserSuccessfully, userCreated, isCreated } = useUsers();

  const onSubmit = (data, e) => {
    const user = {
      id: _.uniqueId(0),
      name: data.name,
      surname: data.surname,
      age: data.age,
    };

    createUserSuccessfully(user);

    setTimeout(() => {
      userCreated(false);
    }, 5000);

    e.target.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Name"
        name="name"
        placeholder="Your first name"
        register={register({
          required: true,
          maxLength: 20,
        })}
        errors={errors}
      />
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
      <Input
        label="Age"
        name="age"
        type="number"
        placeholder="Your age"
        register={register({ min: 1 })}
      />
      <ButtonStyled width="40%" height="35px">
        Save
      </ButtonStyled>
      {isCreated && (
        <MessageStyled>
          <p>
            User has been created. To see it, please go <Link to="/">here</Link>
          </p>
        </MessageStyled>
      )}
    </FormStyled>
  );
}
