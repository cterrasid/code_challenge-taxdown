import React from "react";
import Form from "components/Form";
import { Helmet } from "react-helmet";
import { TitleStyled } from "components/Layout/styles";

export default function CreateUserPage() {
  return (
    <>
      <Helmet>
        <title>Create user | TaxDown Code Challenge</title>
      </Helmet>
      <TitleStyled textAlign="center" isMainTitle={false}>
        <h1>Create User</h1>
      </TitleStyled>
      <Form />
    </>
  );
}
