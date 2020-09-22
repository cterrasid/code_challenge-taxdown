import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import { Global, css } from "@emotion/core";
import { WrapperStyled } from "./styles";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <WrapperStyled direction="column" minHeight="60vh" justify="flex-start">
        {children}
      </WrapperStyled>
      <Footer />
      <Global
        styles={css`
          :root {
            --white: #ffffff;
            --white_smoke: #ecf1ec;
            --grey_dark_1: #4a4b4a;
            --grey_dark_2: #6a6b6a;
            --grey_dark_3: #7e7c7c;
            --green_1: #02cd55;
            --green_2: #3ae780;
            --green_3: #6cd697;
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
            color: var(--grey_dark_1);
            font-family: "Open Sans", sans-serif;
            font-size: 16px;
          }

          a {
            text-decoration: none;
            color: var(--grey_dark_1);
          }
        `}
      />
    </>
  );
}
