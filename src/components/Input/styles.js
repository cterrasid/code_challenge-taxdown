import styled from "@emotion/styled";

export const StyledInput = styled.div`
  width: 100%;

  input {
    height: 1rem;
    background-color: var(--white);
    border: none;
    border-bottom: 1px solid var(--grey_dark_1);
    color: var(--grey_dark_3);
    outline: none;
    padding: 15px 10px;
    width: 100%;
    transition: 0.5s ease;

    ::placeholder {
      color: var(--grey_dark_3);
    }

    :focus {
      outline: none;
      border-bottom: 1px solid var(--green_1);
    }
  }

  label {
    font-size: 12px;
  }

  span {
    font-size: 10px;
  }
`;
