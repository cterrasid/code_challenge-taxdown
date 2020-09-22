import React from "react";
import { Helmet } from "react-helmet";
import Table from "components/Table";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | TaxDown Code Challenge</title>
      </Helmet>
      <Table />
    </>
  );
}
