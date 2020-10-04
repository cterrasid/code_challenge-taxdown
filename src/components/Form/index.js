import React, { Fragment } from "react";
import Input from "components/Input";
import _ from "lodash";
import { useForm } from "react-hook-form";
import { FormStyled, ButtonStyled } from "./styles";
import useUsers from "hooks/useUsers";
import { Link } from "react-router-dom";
import { MessageStyled } from "components/Table/styles";
import inputs from "./inputs.json";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const { createUserSuccessfully, userCreated, isCreated } = useUsers();

  const onSubmit = (data, e) => {
    const user = {
      id: _.uniqueId(0),
      name: data.name,
      surname: data.surname,
      age: data.age,
      gender: data.gender,
    };

    createUserSuccessfully(user);

    setTimeout(() => {
      userCreated(false);
    }, 5000);

    e.target.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      {inputs.inputFields.map((input) =>
        input.type !== "singleselect" ? (
          <Input
            key={input.id}
            label={input.label}
            type={input.type}
            name={input.id}
            placeholder={input.placeholder}
            max={input.maxLength}
            defaultValue={input.defaultValue}
            register={register({
              required: true,
            })}
            errors={errors}
          />
        ) : (
          <Fragment key={input.id}>
            <label htmlFor={input.label}>{input.label}</label>
            <select
              name={input.id}
              id={input.id}
              ref={register({ required: true })}
            >
              {input.options.map((option, index) => (
                <option value={option} key={option} selected={index === 1}>
                  {option}
                </option>
              ))}
            </select>
          </Fragment>
        )
      )}
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
