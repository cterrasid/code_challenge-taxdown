import styled from "@emotion/styled";
import { breakpoints } from "components/Layout/styles";

export const FormStyled = styled.form`
  align-self: center;
  background-color: var(--white);
  display: grid;
  padding: 20px;
  place-items: center;
  row-gap: 15px;
  width: 90%;

  ${breakpoints.tablet} {
    width: 50%;
  }
`;

export const ButtonStyled = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  color: var(--white_smoke);
  font-weight: bold;
  text-align: center;
  background: var(--green_1);
  transition: 0.3s ease;

  :hover {
    color: var(--white);
    background-color: var(--green_2);
  }

  :active {
    background-color: var(--green_2);
  }
`;
