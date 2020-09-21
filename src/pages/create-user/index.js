import Form from "components/Form";
import React from "react";
import { Helmet } from "react-helmet";

export default function CreateUserPage() {
  return (
    <>
      <Helmet>
        <title>Create user | TaxDown Code Challenge</title>
      </Helmet>
      <Form />
    </>
  );
}
