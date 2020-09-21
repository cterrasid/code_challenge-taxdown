import React from "react";
import { Global, css } from "@emotion/core";
import { Wrapper } from "./styles";

export default function Layout({ children }) {
  return (
    <>
      <Wrapper direction="column">{children}</Wrapper>
      <Global
        styles={css`
          :root {
            --white: #ffffff;
            --grey_dark: #505050;
          }

          *,
          *::after,
          *::before {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            background-color: var(--white);
            color: var(--grey_dark);
            font-family: "Open Sans", sans-serif;
            font-size: 16px;
          }
        `}
      />
    </>
  );
}
