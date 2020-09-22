import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { breakpoints } from "components/Layout/styles";

export const HeaderStyled = styled.header`
  background: linear-gradient(
    90deg,
    var(--grey_dark_1) 75%,
    var(--grey_dark_2) 95%,
    var(--grey_dark_3) 100%
  );
  color: var(--white);
  height: 25vh;
`;

export const NavigationStyled = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 12px;
  justify-content: flex-end;
  text-transform: uppercase;

  ${breakpoints.desktop} {
    font-size: 16px;
  }
`;

export const LinkStyled = styled(Link)`
  color: var(--white);
  text-align: center;
  text-decoration: none;
  margin: 0 5px;

  :hover {
    font-weight: bold;
    transition: 0.5s ease;
  }

  ${breakpoints.desktop} {
    margin: 0 10px;
  }
`;
