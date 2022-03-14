import styled, { css } from "styled-components";
import media from "styled-media-query";
const dita = "/dita.jpg";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 120rem;
  padding: 3rem;
  margin: 0 auto;
  position: relative;
  ${media.lessThan("medium")`
    justify-content: center;
    padding: 2rem;
  `}
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  width: 100%;
  height: 100vh;
  ${media.lessThan("medium")`
    flex-direction: column;
  `}
`;

export const Dita = styled.div`
  display: flex;
  height: 35rem;
  width: 35rem;
  background-image: url(${dita});
  background-position: center;
  background-size: 100%;
  animation: morph 8s ease-in-out infinite;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  box-shadow: 0.4rem 0.8rem 0.8rem hsl(0deg 0% 0% / 0.37);
  transition: all 1s ease-in-out;
  @keyframes morph {
    0% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
  }
  &:hover {
    background-size: 115%;
  }
  ${media.lessThan("medium")`
    height: 30rem;
    width: 30rem;
  `}
`;

export const Note = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 2rem;
  ${media.lessThan("large")`
    flex: 0;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.huge};
    font-family: ${theme.font.family.roboto};
    font-weight: ${theme.font.bold};
    background: ${theme.font.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.light};
    line-height: ${theme.font.sizes.big};
    strong {
      font-weight: ${theme.font.bold};
    }
  `}
`;
