import React from "react";
import { TitleStyled, WrapperStyled } from "components/Layout/styles";
import { HeaderStyled, LinkStyled, NavigationStyled } from "./styles";

const header = {
  title: "Code Challenge",
  nav: [
    { title: "Home", route: "/" },
    { title: "Create user", route: "/create" },
  ],
};

export default function Header() {
  return (
    <HeaderStyled>
      <WrapperStyled direction="column">
        <NavigationStyled>
          {header.nav.map((el, index) => (
            <LinkStyled key={index} to={el.route}>
              {el.title}
            </LinkStyled>
          ))}
        </NavigationStyled>

        <TitleStyled isMainTitle={true}>
          <h1>{header.title}</h1>
        </TitleStyled>
      </WrapperStyled>
    </HeaderStyled>
  );
}
