import styled from "@emotion/styled";

export const breakpoints = {
  tablet: "@media screen and (min-width: 768px)",
  laptop: "@media screen and (min-width: 1024px)",
  desktop: "@media screen and (min-width: 1440px)",
};

export const WrapperStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: ${(props) => props.direction};
  height: 100%;
  justify-content: center;
  padding: 20px;
  width: 100%;

  ${breakpoints.tablet} {
    max-width: 700px;
    margin: 0 auto;
  }

  ${breakpoints.desktop} {
    max-width: 1000px;
  }
`;

export const TitleStyled = styled.hgroup`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: ${(props) => props.textAlign};
  margin-bottom: ${(props) => (props.isMainTitle ? 0 : 20)}px;

  h1 {
    font-size: ${(props) => (props.isMainTitle ? 18 : 14)}px;
    text-transform: ${(props) => (props.isMainTitle ? "none" : "uppercase")};

    ${breakpoints.tablet} {
      font-size: ${(props) => (props.isMainTitle ? 19 : 15)}px;
    }

    ${breakpoints.laptop} {
      font-size: ${(props) => (props.isMainTitle ? 24 : 16)}px;
    }
  }
`;
