import React from "react";
import { Helmet } from "react-helmet";
import Table from "components/Table";
import { TitleStyled } from "components/Layout/styles";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | TaxDown Code Challenge</title>
      </Helmet>
      <TitleStyled textAlign="center" isMainTitle={false}>
        <h1>Home</h1>
      </TitleStyled>
      <Table />
    </>
  );
}
