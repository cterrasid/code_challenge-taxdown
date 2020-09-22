import styled from "@emotion/styled";

export const TableStyled = styled.table`
  align-self: center;
  border-radius: 5px;
  border-spacing: 0;
  border: 1px solid var(--grey_dark_3);
  font-size: 12px;
  max-width: 500px;
  text-align: center;
  width: 100%;

  thead {
    background-color: var(--green_3);
    border-bottom: 2px solid var(--grey_dark_1);
    border: none;
    color: var(--white);
    text-transform: uppercase;
  }

  tr {
    height: 30px;
  }
  tr:nth-of-type(2n) {
    background-color: var(--white_smoke);
  }
`;

export const MessageStyled = styled.section`
  align-self: center;
  border-radius: 5px;
  border: 1px solid var(--grey_dark_3);
  text-align: center;
  display: grid;
  place-items: center;

  p {
    padding: 30px;
  }

  a {
    color: var(--green_1);
    font-weight: bold;
  }
`;
